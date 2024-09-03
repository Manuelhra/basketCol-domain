import { RootError } from './RootError';

export class EntityNotFoundError extends RootError {
  constructor(entityType: string, identifier: string | number) {
    const message = `Entity not found: ${entityType} with identifier '${identifier}' does not exist in the system.`;
    super(message);
    this.name = 'EntityNotFoundError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
