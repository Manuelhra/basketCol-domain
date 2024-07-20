import validate from 'uuid-validate';

import { StringValueObject } from './StringValueObject';
import { InvalidDomainIdError } from '../exceptions/InvalidDomainIdError';

export abstract class UuidValueObject extends StringValueObject {
  constructor(value: string, propertyName: string) {
    super(value, propertyName);

    UuidValueObject.ensureIsValidUuid(value);
  }

  private static ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidDomainIdError(id);
    }
  }
}

