import { RootError } from './RootError';

export class CreateMethodNotImplementedError extends RootError {
  constructor(className: string) {
    const message = `The 'create' method must be implemented in the class '${className}'.`;
    super(message);
    this.name = 'CreateMethodNotImplementedError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
