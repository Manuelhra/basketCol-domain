import { InvalidGenderError } from '../../../../shared/domain/exceptions/InvalidGenderError';
import { UserGender } from '../../../shared/domain/value-objects/UserGender';

export class PlayerUserGender extends UserGender {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE'] as const;

  private constructor(value: string) {
    super(value);

    PlayerUserGender.#ensureIsValidGender(value);
  }

  public static create(value: string): PlayerUserGender {
    return new PlayerUserGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!PlayerUserGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, PlayerUserGender.#VALID_GENDERS);
    }
  }
}
