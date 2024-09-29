import { RootError } from './RootError';

export class MethodNotImplementedError extends RootError {
  private constructor(methodName: string) {
    const message = `The method '${methodName}' must be implemented in the derived class.`;
    super(message);
    this.name = 'MethodNotImplementedError';
  }

  public static create(methodName: string): MethodNotImplementedError {
    return new MethodNotImplementedError(methodName);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
