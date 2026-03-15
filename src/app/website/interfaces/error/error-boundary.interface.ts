export interface ErrorBoundaryProps {
  error: Error & { digest?: string; isPublic?: boolean; status?: number };
  reset: () => void;
}
