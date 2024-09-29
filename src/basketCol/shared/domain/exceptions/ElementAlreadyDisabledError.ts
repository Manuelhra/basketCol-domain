import { RootError } from './RootError';

export class ElementAlreadyDisabledError extends RootError {
  private constructor(elementType: string) {
    const message = `Invalid operation: ${elementType} is already in a disabled state.`;
    super(message);

    this.name = 'ElementAlreadyDisabledError';
  }

  public static create(elementType: string): ElementAlreadyDisabledError {
    return new ElementAlreadyDisabledError(elementType);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
