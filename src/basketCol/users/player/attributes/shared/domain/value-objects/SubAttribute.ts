import { MaximumValueExceededError } from '../../../../../../shared/domain/exceptions/MaximumValueExceededError';
import { PositiveIntegerValueObject } from '../../../../../../shared/domain/value-objects/PositiveIntegerValueObject';

export abstract class SubAttribute extends PositiveIntegerValueObject {
  static readonly #maxAllowedValue: number = 99 as const;

  protected constructor(value: number, propertyName: string) {
    super(value, propertyName);

    SubAttribute.ensureNotExceedingMaximum(value, propertyName);
  }

  private static ensureNotExceedingMaximum(value: number, propertyName: string): void {
    if (value > SubAttribute.#maxAllowedValue) {
      throw MaximumValueExceededError.create(propertyName, SubAttribute.#maxAllowedValue, value);
    }
  }
}
