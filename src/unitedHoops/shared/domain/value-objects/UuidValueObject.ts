import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';

import StringValueObject from './StringValueObject';
import InvalidDomainIdError from '../exceptions/InvalidDomainIdError';

class UuidValueObject extends StringValueObject {
  constructor(value: string) {
    super(value, 'id');
    this.ensureIsValidUuid(value);
  }

  public static random(): UuidValueObject {
    return new UuidValueObject(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidDomainIdError(id);
    }
  }
}

export default UuidValueObject;
