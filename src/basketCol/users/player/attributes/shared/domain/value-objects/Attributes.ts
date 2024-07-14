import IntegerValueObject from '../../../../../../shared/domain/value-objects/IntegerValueObject';
import MaximumValueExceededError from '../exceptions/MaximumValueExceededError';
import MinimumValueViolationError from '../exceptions/MinimumValueViolationError';

abstract class Attributes extends IntegerValueObject {
  static readonly #maxAllowedValue: number = 99 as const;

  static readonly #minAllowedValue: number = 0 as const;

  constructor(value: number, propertyName: string) {
    super(value, propertyName);

    Attributes.ensureNotExceedingMaximum(value, propertyName);
    Attributes.ensureAboveMinimumValue(value, propertyName);
  }

  private static ensureNotExceedingMaximum(value: number, propertyName: string): void {
    if (value > Attributes.#maxAllowedValue) {
      throw new MaximumValueExceededError(propertyName, Attributes.#maxAllowedValue, value);
    }
  }

  private static ensureAboveMinimumValue(value: number, propertyName: string): void {
    if (value < Attributes.#minAllowedValue) {
      throw new MinimumValueViolationError(propertyName, Attributes.#minAllowedValue, value);
    }
  }
}

export default Attributes;
