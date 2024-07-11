import UuidValueObject from '../value-objects/UuidValueObject';
import RootError from './RootError';

class IdAlreadyExistsError extends RootError {
  constructor(idValueObject: UuidValueObject) {
    const id: string = idValueObject.getValue();

    const message = `Uniqueness constraint violation: id '${id}' already exists in the system.`;
    super(message);
    this.name = 'IdAlreadyExistsError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default IdAlreadyExistsError;
