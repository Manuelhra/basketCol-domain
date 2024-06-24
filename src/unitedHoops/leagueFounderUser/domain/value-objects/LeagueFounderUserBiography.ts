import LengthExceededError from '../../../shared/domain/exceptions/LengthExceededError';
import MinimumLengthNotMetError from '../../../shared/domain/exceptions/MinimumLengthNotMetError';
import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueFounderUserBiography extends StringValueObject {
  readonly #length: { min: number; max: number; } = { min: 50, max: 200 };

  constructor(value: string) {
    super(value, 'LeagueFounderUserBiography');

    this.ensureIsValidBiography(value);
  }

  private ensureIsValidBiography(value: string): void {
    if (value.length < this.#length.min) {
      throw new MinimumLengthNotMetError('Biography');
    }

    if (value.length > this.#length.max) {
      throw new LengthExceededError('Biography');
    }
  }
}

export default LeagueFounderUserBiography;
