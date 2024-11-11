import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidTeamLeagueStatusError } from '../exceptions/InvalidTeamLeagueStatusError';

export class TeamLeagueStatus extends StringValueObject {
  readonly #VALID_STATUSES = ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'PROMOTED', 'RELEGATED'];

  private constructor(value: string) {
    super(value, 'status');

    this.#ensureIsValidStatus(value);
  }

  public static create(value: string): TeamLeagueStatus {
    return new TeamLeagueStatus(value);
  }

  #ensureIsValidStatus(status: string): void {
    if (!this.#VALID_STATUSES.includes(status)) {
      throw InvalidTeamLeagueStatusError.create(status, this.#VALID_STATUSES);
    }
  }
}
