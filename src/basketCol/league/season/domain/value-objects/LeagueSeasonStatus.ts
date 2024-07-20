import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidLeagueSeasonStatusError } from '../exceptions/InvalidLeagueSeasonStatusError';

export class LeagueSeasonStatus extends StringValueObject {
  static readonly #VALID_STATUSES: string[] = ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED', 'POSTPONED', 'SUSPENDED', 'RESCHEDULED'] as const;

  constructor(value: string) {
    super(value, 'status');

    LeagueSeasonStatus.ensureIsValidStatus(value);
  }

  public static createUpcoming(): LeagueSeasonStatus {
    return new LeagueSeasonStatus('UPCOMING');
  }

  private static ensureIsValidStatus(status: string): void {
    if (!LeagueSeasonStatus.#VALID_STATUSES.includes(status)) {
      throw new InvalidLeagueSeasonStatusError(status, LeagueSeasonStatus.#VALID_STATUSES);
    }
  }
}

