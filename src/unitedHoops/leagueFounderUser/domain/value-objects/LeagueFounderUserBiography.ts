import PropertyLengthExceededError from '../../../shared/domain/exceptions/PropertyLengthExceededError';
import PropertyLengthTooShortError from '../../../shared/domain/exceptions/PropertyLengthTooShortError';
import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueFounderUserBiography extends StringValueObject {
  readonly #LENGTH: { min: number; max: number; } = { min: 50, max: 200 } as const;

  constructor(value: string) {
    super(value, 'biography');

    this.ensureIsValidBiography(value);
  }

  private ensureIsValidBiography(value: string): void {
    if (value.length < this.#LENGTH.min) {
      throw new PropertyLengthTooShortError('biography', this.#LENGTH.min, value.length);
    }

    if (value.length > this.#LENGTH.max) {
      throw new PropertyLengthExceededError('biography', this.#LENGTH.max, value.length);
    }
  }
}

export default LeagueFounderUserBiography;
