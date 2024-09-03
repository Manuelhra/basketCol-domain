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

    return this.constructor === other.constructor && this.isValueEqual(other.value);
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
    if (value === null && !options.allowNull) {
      throw new NullValueError(propertyName, expectedType);
    }

    if (value === undefined && !options.allowUndefined) {
      throw new UndefinedValueError(propertyName, expectedType);
    }
  }

  protected isValueEqual(otherValue: unknown): boolean {
    if (typeof this.value === 'object' && this.value !== null) {
      return JSON.stringify(this.value) === JSON.stringify(otherValue);
    }
    return this.value === otherValue;
  }
}
