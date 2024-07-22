import { StringValueObject } from '../../../shared/domain/value-objects/StringValueObject';
import { TeamOfficialNameLengthError } from '../exceptions/TeamOfficialNameLengthError';

export class TeamOfficialName extends StringValueObject {
  static readonly #LENGTH: { min: number; max: number; } = { min: 5, max: 30 } as const;

  constructor(value: string) {
    super(value, 'officialName');

    TeamOfficialName.ensureValidLength(value);
  }

  private static ensureValidLength(value: string): void {
    if (value.length < TeamOfficialName.#LENGTH.min || value.length > TeamOfficialName.#LENGTH.max) {
      throw new TeamOfficialNameLengthError(value, TeamOfficialName.#LENGTH.min, TeamOfficialName.#LENGTH.max);
    }
  }
}
