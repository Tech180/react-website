/**
 * Centralized AppError for the project.
 * Adheres to central-error-strategy guidelines.
 */
export class AppError extends Error {
  constructor(
    public override readonly message: string,
    public readonly code: string = 'GENERIC_ERROR',
    public readonly status: number = 500,
    public readonly severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    public readonly isPublic: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
    // Ensure the prototype is set correctly for instanceof checks
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
