import { StringValueObject } from '../../../../../shared/domain/value-objects/StringValueObject';
import { InvalidLeagueTeamStatusError } from '../exceptions/InvalidLeagueTeamStatusError';

export class LeagueTeamStatus extends StringValueObject {
  readonly #VALID_STATUSES = ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'PROMOTED', 'RELEGATED'];

  private constructor(value: string) {
    super(value, 'status');

    this.#ensureIsValidStatus(value);
  }

  public static create(value: string): LeagueTeamStatus {
    return new LeagueTeamStatus(value);
  }

  #ensureIsValidStatus(status: string): void {
    if (!this.#VALID_STATUSES.includes(status)) {
      throw InvalidLeagueTeamStatusError.create(status, this.#VALID_STATUSES);
    }
  }
}
