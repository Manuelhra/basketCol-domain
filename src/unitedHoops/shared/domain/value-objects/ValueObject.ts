import InvalidPropertyTypeError from '../exceptions/InvalidPropertyTypeError';

abstract class ValueObject<T> {
  readonly #value: T;

  constructor(value: T, propertyName: string, expectedType: string) {
    this.ensureValueIsDefined(value, propertyName, expectedType);

    this.#value = value;
  }

  public equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.#value === this.#value;
  }

  public getValue(): T {
    return this.#value;
  }

  private ensureValueIsDefined(value: T, propertyName: string, expectedType: string): void {
    if (value === null || value === undefined) {
      throw new InvalidPropertyTypeError(propertyName, expectedType, typeof value);
    }
  }
}

export default ValueObject;
