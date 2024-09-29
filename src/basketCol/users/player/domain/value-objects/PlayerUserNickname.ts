import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export class PlayerUserNickname extends StringValueObject {
  readonly #LENGTH: { min: number; max: number; } = { min: 2, max: 20 };

  private constructor(value: string) {
    super(value, 'nickname');

    this.ensureIsValidNickname(value);
  }

  public static create(value: string): PlayerUserNickname {
    return new PlayerUserNickname(value);
  }

  private ensureIsValidNickname(value: string): void {
    if (value.length < this.#LENGTH.min) {
      throw PropertyLengthTooShortError.create('nickname', this.#LENGTH.min, value.length);
    }

    if (value.length > this.#LENGTH.max) {
      throw PropertyLengthExceededError.create('nickname', this.#LENGTH.max, value.length);
    }
  }
}
