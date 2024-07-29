import { MinimumValueViolationError } from '../exceptions/MinimumValueViolationError';
import { NotIntegerError } from '../exceptions/NotIntegerError';
import { ValueObject } from './ValueObject';

export class PositiveIntegerValueObject extends ValueObject<number> {
  private static readonly EXPECTED_TYPE = 'positive integer' as const;

  static readonly #MIN_ALLOWED_VALUE: number = 0 as const;

  constructor(value: number, propertyName: string) {
    super(value, propertyName, PositiveIntegerValueObject.EXPECTED_TYPE);

    PositiveIntegerValueObject.ensureIsInteger(value, propertyName);
    PositiveIntegerValueObject.ensureIsPositive(value, propertyName);
  }

  public add(other: PositiveIntegerValueObject, propertyName: string): PositiveIntegerValueObject {
    return new PositiveIntegerValueObject(this.value + other.value, propertyName);
  }

  public subtract(other: PositiveIntegerValueObject, propertyName: string): PositiveIntegerValueObject {
    const result = this.value - other.value;
    return new PositiveIntegerValueObject(result >= 0 ? result : 0, propertyName);
  }

  protected override isValueEqual(otherValue: unknown): boolean {
    return super.isValueEqual(otherValue) && Number.isInteger(otherValue as number) && (otherValue as number) >= 0;
  }

  private static ensureIsInteger(value: number, propertyName: string): void {
    if (!Number.isInteger(value)) {
      throw new NotIntegerError(propertyName, value);
    }
  }

  private static ensureIsPositive(value: number, propertyName: string): void {
    if (value < PositiveIntegerValueObject.#MIN_ALLOWED_VALUE) {
      throw new MinimumValueViolationError(
        propertyName,
        PositiveIntegerValueObject.#MIN_ALLOWED_VALUE,
        value,
      );
    }
  }
}
