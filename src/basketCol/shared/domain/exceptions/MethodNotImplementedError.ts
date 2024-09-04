import { RootError } from './RootError';

export class MethodNotImplementedError extends RootError {
  constructor(methodName: string) {
    const message = `The method '${methodName}' must be implemented in the derived class.`;
    super(message);
    this.name = 'MethodNotImplementedError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
