import { StringValueObject } from '../../../shared/domain/value-objects/StringValueObject';
import { TeamOfficialNameLengthError } from '../exceptions/TeamOfficialNameLengthError';

export class TeamOfficialName extends StringValueObject {
  static readonly #LENGTH: { min: number; max: number; } = { min: 5, max: 30 } as const;

  private constructor(value: string) {
    super(value, 'officialName');

    TeamOfficialName.#ensureValidLength(value);
  }

  public static create(value: string): TeamOfficialName {
    return new TeamOfficialName(value);
  }

  static #ensureValidLength(value: string): void {
    if (value.length < TeamOfficialName.#LENGTH.min || value.length > TeamOfficialName.#LENGTH.max) {
      throw TeamOfficialNameLengthError.create(value, TeamOfficialName.#LENGTH.min, TeamOfficialName.#LENGTH.max);
    }
  }
}
