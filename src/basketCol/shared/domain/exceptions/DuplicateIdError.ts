import { RootError } from './RootError';

export class DuplicateIdError extends RootError {
  private constructor(id: string | number) {
    const message = `Uniqueness constraint violation: ID '${id}' already exists in the system.`;
    super(message);
    this.name = 'IdAlreadyExistsException';
  }

  public static create(id: string | number): DuplicateIdError {
    return new DuplicateIdError(id);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
