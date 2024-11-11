import { NullableString } from './NullableString';
import { UuidValueObject } from './UuidValueObject';

export abstract class NullableIdValueObject extends NullableString {
  protected constructor(value: string | null, propertyName: string = 'id') {
    super(value, propertyName);

    if (value !== null) {
      this.#ensureIsValidId(value);
    }
  }

  #ensureIsValidId(value: string): void {
    UuidValueObject.ensureIsValidUuid(value);
  }
}
