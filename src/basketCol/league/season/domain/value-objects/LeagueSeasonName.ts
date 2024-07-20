import { PropertyLengthExceededError } from '../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export class LeagueSeasonName extends StringValueObject {
  static readonly #LENGTH: { min: number; max: number } = { min: 8, max: 20 } as const;

  constructor(value: string) {
    super(value, 'name');

    LeagueSeasonName.ensureIsValidName(value, 'name');
  }

  private static ensureIsValidName(value: string, propertyName: string): void {
    if (value.length < LeagueSeasonName.#LENGTH.min) {
      throw new PropertyLengthTooShortError(propertyName, LeagueSeasonName.#LENGTH.min, value.length);
    }

    if (value.length > LeagueSeasonName.#LENGTH.max) {
      throw new PropertyLengthExceededError(propertyName, LeagueSeasonName.#LENGTH.max, value.length);
    }
  }
}

