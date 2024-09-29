import { MaximumValueExceededError } from '../../../../../../shared/domain/exceptions/MaximumValueExceededError';
import { PositiveIntegerValueObject } from '../../../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class Attribute extends PositiveIntegerValueObject {
  static readonly #maxAllowedValue: number = 99 as const;

  protected constructor(value: number, propertyName: string) {
    super(value, propertyName);

    Attribute.ensureNotExceedingMaximum(value, propertyName);
  }

  private static ensureNotExceedingMaximum(value: number, propertyName: string): void {
    if (value > Attribute.#maxAllowedValue) {
      throw MaximumValueExceededError.create(propertyName, Attribute.#maxAllowedValue, value);
    }
  }
}
