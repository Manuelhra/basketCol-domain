import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidTeamPlayerStatusError } from '../exceptions/InvalidTeamPlayerStatusError';

export class TeamPlayerStatus extends StringValueObject {
  static readonly #VALID_STATUSES: string[] = ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'TRANSFERRED'] as const;

  private constructor(value: string) {
    super(value, 'status');

    TeamPlayerStatus.#ensureIsValidStatus(value);
  }

  public static create(value: string): TeamPlayerStatus {
    return new TeamPlayerStatus(value);
  }

  public static createActive(): TeamPlayerStatus {
    return new TeamPlayerStatus('ACTIVE');
  }

  public static createTransferred(): TeamPlayerStatus {
    return new TeamPlayerStatus('TRANSFERRED');
  }

  static #ensureIsValidStatus(status: string): void {
    if (!TeamPlayerStatus.#VALID_STATUSES.includes(status)) {
      throw InvalidTeamPlayerStatusError.create(status, TeamPlayerStatus.#VALID_STATUSES);
    }
  }
}
