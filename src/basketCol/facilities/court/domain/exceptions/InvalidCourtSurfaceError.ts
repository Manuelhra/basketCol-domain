import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidCourtSurfaceError extends RootError {
  private constructor(invalidSurface: string, validSurfaces: readonly string[]) {
    const message = `Invalid court surface: "${invalidSurface}". Valid surfaces are: ${validSurfaces.join(', ')}.`;
    super(message);
    this.name = 'InvalidCourtSurfaceError';
  }

  public static create(invalidSurface: string, validSurfaces: readonly string[]): InvalidCourtSurfaceError {
    return new InvalidCourtSurfaceError(invalidSurface, validSurfaces);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
