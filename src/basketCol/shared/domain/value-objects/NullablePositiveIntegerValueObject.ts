import { NullableNumber } from './NullableNumber';
import { PositiveIntegerValueObject } from './PositiveIntegerValueObject';

export abstract class NullablePositiveIntegerValueObject extends NullableNumber {
  protected constructor(value: number | null, propertyName: string) {
    super(value, propertyName);

    if (value !== null) {
      this.#ensureIsPositiveInteger(value, propertyName);
    }
  }

  #ensureIsPositiveInteger(value: number, propertyName: string): void {
    PositiveIntegerValueObject.ensureIsIntegerAndPositive(value, propertyName);
  }
}
