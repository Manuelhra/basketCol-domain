import { DateValueObject } from './DateValueObject';
import { NullableString } from './NullableString';

export abstract class NullableDate extends NullableString {
  protected constructor(value: string | null, propertyName: string) {
    super(value, propertyName);

    if (value !== null) {
      this.#ensureIsValidDate(value);
    }
  }

  #ensureIsValidDate(value: string): void {
    if (value !== null) {
      DateValueObject.ensureIsValidDate(value);
    }
  }
}
