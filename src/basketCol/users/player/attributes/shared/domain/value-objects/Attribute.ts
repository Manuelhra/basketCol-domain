import IntegerValueObject from '../../../../../../shared/domain/value-objects/IntegerValueObject';
import MaximumValueExceededError from '../exceptions/MaximumValueExceededError';
import MinimumValueViolationError from '../exceptions/MinimumValueViolationError';

abstract class Attribute extends IntegerValueObject {
  static readonly #maxAllowedValue: number = 99 as const;

  static readonly #minAllowedValue: number = 0 as const;

  constructor(value: number, propertyName: string) {
    super(value, propertyName);

    Attribute.ensureNotExceedingMaximum(value, propertyName);
    Attribute.ensureAboveMinimumValue(value, propertyName);
  }

  private static ensureNotExceedingMaximum(value: number, propertyName: string): void {
    if (value > Attribute.#maxAllowedValue) {
      throw new MaximumValueExceededError(propertyName, Attribute.#maxAllowedValue, value);
    }
  }

  private static ensureAboveMinimumValue(value: number, propertyName: string): void {
    if (value < Attribute.#minAllowedValue) {
      throw new MinimumValueViolationError(propertyName, Attribute.#minAllowedValue, value);
    }
  }
}

export default Attribute;
