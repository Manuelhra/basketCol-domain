import { RootError } from './RootError';

export class ElementAlreadyDisabledError extends RootError {
  constructor(elementType: string) {
    const message = `Invalid operation: ${elementType} is already in a disabled state.`;
    super(message);

    this.name = 'ElementAlreadyDisabledError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

