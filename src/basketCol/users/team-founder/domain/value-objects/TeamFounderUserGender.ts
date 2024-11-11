import { InvalidGenderError } from '../../../../shared/domain/exceptions/InvalidGenderError';
import { UserGender } from '../../../shared/domain/value-objects/UserGender';

export class TeamFounderUserGender extends UserGender {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE'] as const;

  private constructor(value: string) {
    super(value);

    TeamFounderUserGender.#ensureIsValidGender(value);
  }

  public static create(value: string): TeamFounderUserGender {
    return new TeamFounderUserGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!TeamFounderUserGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, TeamFounderUserGender.#VALID_GENDERS);
    }
  }
}
