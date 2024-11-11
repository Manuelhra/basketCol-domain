import { InvalidGenderError } from '../../../../shared/domain/exceptions/InvalidGenderError';
import { UserGender } from '../../../shared/domain/value-objects/UserGender';

export class HostUserGender extends UserGender {
  static readonly #VALID_GENDERS: string[] = ['OTHER'] as const;

  private constructor(value: string) {
    super(value);

    HostUserGender.#ensureIsValidGender(value);
  }

  public static create(value: string): HostUserGender {
    return new HostUserGender(value);
  }

  static #ensureIsValidGender(gender: string): void {
    if (!HostUserGender.#VALID_GENDERS.includes(gender)) {
      throw InvalidGenderError.create(gender, HostUserGender.#VALID_GENDERS);
    }
  }
}
