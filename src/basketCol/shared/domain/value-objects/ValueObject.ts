import { InvalidPropertyTypeError } from '../exceptions/InvalidPropertyTypeError';

export abstract class ValueObject<T> {
  readonly #value: T;

  protected constructor(value: T, propertyName: string, expectedType: string) {
    this.ensureValueIsDefined(value, propertyName, expectedType);

    this.#value = value;
  }

  public get value(): T {
    return this.#value;
  }

  public equals(other: unknown): boolean {
    if (!(other instanceof ValueObject)) {
      return false;
    }

    if (this.constructor !== other.constructor) {
      return false;
    }

    return this.isValueEqual(other.value);
  }

  public toString(): string {
    return `${this.constructor.name}(${JSON.stringify(this.#value)})`;
  }

  private ensureValueIsDefined(value: T, propertyName: string, expectedType: string): void {
    if (value === null || value === undefined) {
      throw new InvalidPropertyTypeError(propertyName, expectedType, typeof value);
    }
  }

  protected isValueEqual(otherValue: unknown): boolean {
    return this.#value === otherValue;
  }
}
