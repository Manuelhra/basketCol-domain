import { RootError } from './RootError';

export class EntityNotFoundError extends RootError {
  private constructor(entityType: string, identifier: string | number) {
    const message = `Entity not found: ${entityType} with identifier '${identifier}' does not exist in the system.`;
    super(message);
    this.name = 'EntityNotFoundError';
  }

  public static create(entityType: string, identifier: string | number): EntityNotFoundError {
    return new EntityNotFoundError(entityType, identifier);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
