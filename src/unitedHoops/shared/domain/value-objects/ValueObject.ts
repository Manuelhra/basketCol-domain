import InvalidArgumentError from '../exceptions/InvalidArgumentError';

abstract class ValueObject<T> {
  readonly #value: T;

  constructor(value: T, valueObjectName: string) {
    this.ensureValueIsDefined(value, valueObjectName);

    this.#value = value;
  }

  public equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.#value === this.#value;
  }

  public getValue(): T {
    return this.#value;
  }

  private ensureValueIsDefined(value: T, valueObjectName: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError(`${valueObjectName} must be defined.`);
    }
  }
}

export default ValueObject;
