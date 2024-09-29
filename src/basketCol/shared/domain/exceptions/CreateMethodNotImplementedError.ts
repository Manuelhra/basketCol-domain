import { RootError } from './RootError';

export class CreateMethodNotImplementedError extends RootError {
  private constructor(className: string) {
    const message = `The 'create' method must be implemented in the class '${className}'.`;
    super(message);
    this.name = 'CreateMethodNotImplementedError';
  }

  public static create(className: string): CreateMethodNotImplementedError {
    return new CreateMethodNotImplementedError(className);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
