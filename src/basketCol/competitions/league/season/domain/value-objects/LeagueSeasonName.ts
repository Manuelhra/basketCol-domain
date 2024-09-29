import { PropertyLengthExceededError } from '../../../../../shared/domain/exceptions/PropertyLengthExceededError';
import { PropertyLengthTooShortError } from '../../../../../shared/domain/exceptions/PropertyLengthTooShortError';
import { StringValueObject } from '../../../../../shared/domain/value-objects/StringValueObject';

export class LeagueSeasonName extends StringValueObject {
  static readonly #LENGTH: { min: number; max: number } = { min: 8, max: 20 } as const;

  private constructor(value: string) {
    super(value, 'name');

    LeagueSeasonName.#ensureIsValidName(value, 'name');
  }

  public static create(value: string): LeagueSeasonName {
    return new LeagueSeasonName(value);
  }

  static #ensureIsValidName(value: string, propertyName: string): void {
    if (value.length < LeagueSeasonName.#LENGTH.min) {
      throw PropertyLengthTooShortError.create(propertyName, LeagueSeasonName.#LENGTH.min, value.length);
    }

    if (value.length > LeagueSeasonName.#LENGTH.max) {
      throw PropertyLengthExceededError.create(propertyName, LeagueSeasonName.#LENGTH.max, value.length);
    }
  }
}
