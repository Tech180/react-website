import { AppError } from "../errors/app.error";
import { InterceptorOptions } from "../types/api/interceptor.type";

/**
 * Centralized Interceptor Logic
 * Wraps native fetch to handle request/response orchestration
 */
export async function interceptor<T>(
  endpoint: string,
  options: InterceptorOptions = {}
): Promise<T> {
  const { params, baseUrl, ...fetchOptions } = options;

  // --- REQUEST INTERCEPTION ---
  const host = baseUrl || process.env.NEXT_PUBLIC_API_URL || '';

  // Handle absolute vs relative URLs
  const url = endpoint.startsWith('http')
    ? new URL(endpoint)
    : new URL(endpoint, host);

  if (params) {
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        url.searchParams.append(key, val);
      }
    });
  }

  const headers = new Headers(fetchOptions.headers);

  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  headers.set('X-Runtime', 'Bun'); // Identification for server logs

  try {
    const response = await fetch(url.toString(), {
      ...fetchOptions,
      headers,
    });

    // --- RESPONSE INTERCEPTION ---
    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));

      // Map status codes to internal error contracts
      const statusMap: Record<number, { msg: string; code: string }> = {
        401: { msg: 'Unauthorized: Session Expired', code: 'ERR_AUTH_001' },
        403: { msg: 'Forbidden: Access Denied', code: 'ERR_AUTH_002' },
        404: { msg: 'Resource Not Found', code: 'ERR_API_404' },
        422: { msg: 'Validation Failure', code: 'ERR_VAL_001' },
        429: { msg: 'Rate Limit Exceeded', code: 'ERR_SYS_429' },
      };

      const mappedError = statusMap[response.status] || {
        msg: errorPayload.message || 'An unexpected API error occurred',
        code: 'ERR_API_GENERIC'
      };

      throw new AppError(
        mappedError.msg,
        mappedError.code,
        response.status,
        response.status >= 500 ? 'high' : 'medium'
      );
    }

    // Return serializable data for RSC/Zoneless compatibility
    return await response.json() as T;

  } catch (error) {
    // Re-throw if already an AppError, otherwise wrap network/runtime failures
    if (error instanceof AppError) throw error;

    // Headless logging (Server-side console for Bun/Next.js)
    console.error(`[INTERCEPTOR_FAILURE][${new Date().toISOString()}]:`, error);

    throw new AppError(
      'Network unreachable or connection timed out',
      'ERR_NETWORK_FAILURE',
      0,
      'critical'
    );
  }
}
