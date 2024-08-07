import { RootError } from './RootError';

export class DependencyContainerNotInitializedError extends RootError {
  constructor() {
    const message = 'Dependency container has not been initialized.';
    super(message);
    this.name = 'DependencyContainerNotInitializedError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
