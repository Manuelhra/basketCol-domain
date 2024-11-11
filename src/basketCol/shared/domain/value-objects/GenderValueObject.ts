import { InvalidGenderError } from '../exceptions';
import { StringValueObject } from './StringValueObject';

export abstract class GenderValueObject extends StringValueObject {
  static readonly #VALID_GENDERS: string[] = ['FEMALE', 'MALE', 'MIXED', 'OTHER'] as const;

  protected constructor(value: string) {
    super(value, 'gender');

    GenderValueObject.#ensureIsValidGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!GenderValueObject.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, GenderValueObject.#VALID_GENDERS);
    }
  }
}
