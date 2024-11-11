import { InvalidGenderError } from '../../../../shared/domain/exceptions/InvalidGenderError';
import { UserGender } from '../../../shared/domain/value-objects/UserGender';

export class RefereeUserGender extends UserGender {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE'] as const;

  private constructor(value: string) {
    super(value);

    RefereeUserGender.#ensureIsValidGender(value);
  }

  public static create(value: string): RefereeUserGender {
    return new RefereeUserGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!RefereeUserGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, RefereeUserGender.#VALID_GENDERS);
    }
  }
}
