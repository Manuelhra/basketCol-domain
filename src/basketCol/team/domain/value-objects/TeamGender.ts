import { InvalidGenderError } from '../../../shared/domain/exceptions/InvalidGenderError';
import { GenderValueObject } from '../../../shared/domain/value-objects/GenderValueObject';

export class TeamGender extends GenderValueObject {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE', 'MIXED'] as const;

  private constructor(value: string) {
    super(value);

    TeamGender.#ensureIsValidGender(value);
  }

  static create(value: string): TeamGender {
    return new TeamGender(value);
  }

  public static get validGenders(): string[] {
    return TeamGender.#VALID_GENDERS;
  }

  static #ensureIsValidGender(gender: string): void {
    if (!TeamGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, TeamGender.#VALID_GENDERS);
    }
  }
}
