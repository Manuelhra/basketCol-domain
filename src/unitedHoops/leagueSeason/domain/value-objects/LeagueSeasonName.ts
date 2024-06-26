import PropertyLengthExceededError from '../../../shared/domain/exceptions/PropertyLengthExceededError';
import PropertyLengthTooShortError from '../../../shared/domain/exceptions/PropertyLengthTooShortError';
import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueSeasonName extends StringValueObject {
  readonly #LENGTH: { min: number; max: number } = { min: 8, max: 20 } as const;

  constructor(value: string) {
    super(value, 'name');

    this.ensureIsValidName(value, 'name');
  }

  private ensureIsValidName(value: string, propertyName: string): void {
    if (value.length < this.#LENGTH.min) {
      throw new PropertyLengthTooShortError(propertyName, this.#LENGTH.min, value.length);
    }

    if (value.length > this.#LENGTH.max) {
      throw new PropertyLengthExceededError(propertyName, this.#LENGTH.max, value.length);
    }
  }
}

export default LeagueSeasonName;
