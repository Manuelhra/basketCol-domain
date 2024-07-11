import RootError from './RootError';

class DuplicateIdError extends RootError {
  constructor(id: string | number) {
    const message = `Uniqueness constraint violation: ID '${id}' already exists in the system.`;
    super(message);
    this.name = 'IdAlreadyExistsException';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default DuplicateIdError;
