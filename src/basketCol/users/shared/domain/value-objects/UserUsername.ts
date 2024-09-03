import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class UserUsername extends StringValueObject {
  readonly #LENGTH: { min: number; max: number; } = { min: 3, max: 20 } as const;

  protected constructor(value: string) {
    super(value, 'username');

    this.ensureIsValidUsername(value);
  }

  private ensureIsValidUsername(value: string): void {
    if (value.length < this.#LENGTH.min) {
      throw new PropertyLengthTooShortError('username', this.#LENGTH.min, value.length);
    }

    if (value.length > this.#LENGTH.max) {
      throw new PropertyLengthExceededError('username', this.#LENGTH.max, value.length);
    }
  }
}
