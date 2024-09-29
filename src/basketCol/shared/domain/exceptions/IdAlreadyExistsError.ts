import { UuidValueObject } from '../value-objects/UuidValueObject';
import { RootError } from './RootError';

export class IdAlreadyExistsError extends RootError {
  private constructor(idValueObject: UuidValueObject) {
    const id: string = idValueObject.value;

    const message = `Uniqueness constraint violation: id '${id}' already exists in the system.`;
    super(message);
    this.name = 'IdAlreadyExistsError';
  }

  public static create(idValueObject: UuidValueObject): IdAlreadyExistsError {
    return new IdAlreadyExistsError(idValueObject);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
