import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';

import InvalidArgumentError from '../exceptions/InvalidArgumentError';
import StringValueObject from './StringValueObject';

class UuidValueObject extends StringValueObject {
  constructor(value: string) {
    super(value, 'Id');
    this.ensureIsValidUuid(value);
  }

  public static random(): UuidValueObject {
    return new UuidValueObject(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
}

export default UuidValueObject;
