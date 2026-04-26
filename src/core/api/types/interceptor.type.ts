export type InterceptorOptions = RequestInit & {
  params?: Record<string, string>;
  baseUrl?: string;
};
