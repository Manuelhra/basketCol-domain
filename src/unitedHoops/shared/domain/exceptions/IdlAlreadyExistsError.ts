import UuidValueObject from '../value-objects/UuidValueObject';

class IdAlreadyExistsError extends Error {
  constructor(idValueObject: UuidValueObject) {
    const id: string = idValueObject.getValue();

    const message = `Uniqueness constraint violation: id '${id}' already exists in the system.`;
    super(message);
    this.name = 'IdAlreadyExistsError';
  }
}

export default IdAlreadyExistsError;
