import { StringValueObject } from './StringValueObject';
import { InvalidDomainIdError } from '../exceptions/InvalidDomainIdError';

export abstract class UuidValueObject extends StringValueObject {
  private static UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  protected constructor(value: string, propertyName: string) {
    super(value, propertyName);

    UuidValueObject.ensureIsValidUuid(value);
  }

  private static ensureIsValidUuid(id: string): void {
    if (!UuidValueObject.UUID_REGEX.test(id)) {
      throw InvalidDomainIdError.create(id);
    }
  }
}
