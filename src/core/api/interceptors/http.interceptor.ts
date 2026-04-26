import { AppError } from '@/core/api/errors/app.error';
import { InterceptorOptions } from '@/core/api/types/interceptor.type';

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
  // Handle absolute vs relative URLs and server-side fallback
  const isServer = typeof window === 'undefined';
  let host = baseUrl || process.env.NEXT_PUBLIC_API_URL || '';

  if (isServer && !host && endpoint.startsWith('/')) {
    // During SSR, if no host is specified and the endpoint is relative,
    // we fallback to the local backend directly to avoid network overhead or missing origins.
    host = 'http://localhost:3001';
  }

  const url = endpoint.startsWith('http')
    ? new URL(endpoint)
    : host 
      ? new URL(endpoint, host)
      : new URL(endpoint, isServer ? 'http://localhost' : window.location.origin);

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
    const json = await response.json();

    // Standardized Backend Response Handling
    if (json && typeof json === 'object' && 'Status' in json) {
      if (json.Status === 'Success' && 'Data' in json) {
        return json.Data;
      }
      
      if (json.Status === 'Error' && 'Error' in json) {
        const err = json.Error;
        throw new AppError(
          err.Message || 'An internal server error occurred',
          err.Code || 'ERR_API_INTERNAL',
          err.Status || response.status,
          err.Status >= 500 ? 'high' : 'medium'
        );
      }
    }

    return json as T;

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
