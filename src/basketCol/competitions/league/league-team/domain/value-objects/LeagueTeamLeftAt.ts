import { NullableDate } from '../../../../../shared/domain/value-objects/NullableDate';

export class LeagueTeamLeftAt extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'leftAt');
  }

  public static create(value: string | null): LeagueTeamLeftAt {
    return new LeagueTeamLeftAt(value);
  }
}
