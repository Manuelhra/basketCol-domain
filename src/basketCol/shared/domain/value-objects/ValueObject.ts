import { InvalidValueObjectConfigurationError } from '../exceptions/InvalidValueObjectConfigurationError';
import { NullValueError } from '../exceptions/NullValueError';
import { UndefinedValueError } from '../exceptions/UndefinedValueError';

interface ValueObjectOptions {
  allowNull?: boolean;
  allowUndefined?: boolean;
}

export abstract class ValueObject<T> {
  readonly #value: T;

  protected constructor(
    value: T,
    propertyName: string,
    expectedType: string,
    options: ValueObjectOptions = {},
  ) {
    this.validateOptions(options);
    this.validateValue(value, propertyName, expectedType, options);
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
    return `${this.constructor.name}(${JSON.stringify(this.value)})`;
  }

  private validateOptions(options: ValueObjectOptions): void {
    if (options.allowNull && options.allowUndefined) {
      throw new InvalidValueObjectConfigurationError();
    }
  }

  private validateValue(value: T, propertyName: string, expectedType: string, options: ValueObjectOptions): void {
    if (!options.allowNull) {
      this.ensureValueIsNotNull(value, propertyName, expectedType);
    }

    if (!options.allowUndefined) {
      this.ensureValueIsNotUndefined(value, propertyName, expectedType);
    }
  }

  private ensureValueIsNotNull(value: T, propertyName: string, expectedType: string): void {
    if (value === null) {
      throw new NullValueError(propertyName, expectedType);
    }
  }

  private ensureValueIsNotUndefined(value: T, propertyName: string, expectedType: string): void {
    if (value === undefined) {
      throw new UndefinedValueError(propertyName, expectedType);
    }
  }

  protected isValueEqual(otherValue: unknown): boolean {
    return this.value === otherValue;
  }
}
