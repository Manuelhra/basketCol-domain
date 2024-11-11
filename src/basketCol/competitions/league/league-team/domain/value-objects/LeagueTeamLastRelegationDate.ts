import { NullableDate } from '../../../../../shared/domain/value-objects/NullableDate';

export class LeagueTeamLastRelegationDate extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'lastRelegationDate');
  }

  public static create(value: string | null): LeagueTeamLastRelegationDate {
    return new LeagueTeamLastRelegationDate(value);
  }
}
