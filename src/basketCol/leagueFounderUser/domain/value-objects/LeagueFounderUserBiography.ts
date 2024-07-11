import PropertyLengthExceededError from '../../../shared/domain/exceptions/PropertyLengthExceededError';
import PropertyLengthTooShortError from '../../../shared/domain/exceptions/PropertyLengthTooShortError';
import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueFounderUserBiography extends StringValueObject {
  static readonly #LENGTH: { min: number; max: number; } = { min: 50, max: 200 } as const;

  constructor(value: string) {
    super(value, 'biography');

    LeagueFounderUserBiography.ensureIsValidBiography(value);
  }

  private static ensureIsValidBiography(value: string): void {
    if (value.length < LeagueFounderUserBiography.#LENGTH.min) {
      throw new PropertyLengthTooShortError('biography', LeagueFounderUserBiography.#LENGTH.min, value.length);
    }

    if (value.length > LeagueFounderUserBiography.#LENGTH.max) {
      throw new PropertyLengthExceededError('biography', LeagueFounderUserBiography.#LENGTH.max, value.length);
    }
  }
}

export default LeagueFounderUserBiography;
