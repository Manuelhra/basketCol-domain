import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class UserBiography extends StringValueObject {
  readonly #LENGTH: { min: number; max: number; } = { min: 50, max: 200 } as const;

  protected constructor(value: string) {
    super(value, 'biography');

    this.ensureIsValidBiography(value);
  }

  private ensureIsValidBiography(value: string): void {
    if (value.length < this.#LENGTH.min) {
      throw PropertyLengthTooShortError.create('biography', this.#LENGTH.min, value.length);
    }

    if (value.length > this.#LENGTH.max) {
      throw PropertyLengthExceededError.create('biography', this.#LENGTH.max, value.length);
    }
  }
}
