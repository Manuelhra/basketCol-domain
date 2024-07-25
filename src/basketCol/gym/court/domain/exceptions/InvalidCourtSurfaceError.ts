import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidCourtSurfaceError extends RootError {
  constructor(invalidSurface: string, validSurfaces: readonly string[]) {
    const message = `Invalid court surface: "${invalidSurface}". Valid surfaces are: ${validSurfaces.join(', ')}.`;
    super(message);
    this.name = 'InvalidCourtSurfaceError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
