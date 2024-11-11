import { NullableDate } from '../../../../shared/domain/value-objects/NullableDate';

export class TeamLeagueLastRelegationDate extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'lastRelegationDate');
  }

  public static create(value: string | null): TeamLeagueLastRelegationDate {
    return new TeamLeagueLastRelegationDate(value);
  }
}
