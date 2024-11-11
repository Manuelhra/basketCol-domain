import { InvalidGenderError } from '../../../../shared/domain/exceptions/InvalidGenderError';
import { UserGender } from '../../../shared/domain/value-objects/UserGender';

export class LeagueFounderUserGender extends UserGender {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE'] as const;

  private constructor(value: string) {
    super(value);

    LeagueFounderUserGender.#ensureIsValidGender(value);
  }

  public static create(value: string): LeagueFounderUserGender {
    return new LeagueFounderUserGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!LeagueFounderUserGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, LeagueFounderUserGender.#VALID_GENDERS);
    }
  }
}
