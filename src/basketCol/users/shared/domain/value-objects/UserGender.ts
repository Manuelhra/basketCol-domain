import { InvalidGenderError } from '../../../../shared/domain/exceptions/InvalidGenderError';
import { GenderValueObject } from '../../../../shared/domain/value-objects/GenderValueObject';

export abstract class UserGender extends GenderValueObject {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE', 'OTHER'] as const;

  protected constructor(value: string) {
    super(value);

    UserGender.#ensureIsValidGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!UserGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, UserGender.#VALID_GENDERS);
    }
  }
}
