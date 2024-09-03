import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export class PlayerUserNickname extends StringValueObject {
  readonly #LENGTH: { min: number; max: number; } = { min: 2, max: 20 };

  public constructor(value: string) {
    super(value, 'nickname');

    this.ensureIsValidNickname(value);
  }

  private ensureIsValidNickname(value: string): void {
    if (value.length < this.#LENGTH.min) {
      throw new PropertyLengthTooShortError('nickname', this.#LENGTH.min, value.length);
    }

    if (value.length > this.#LENGTH.max) {
      throw new PropertyLengthExceededError('nickname', this.#LENGTH.max, value.length);
    }
  }
}
