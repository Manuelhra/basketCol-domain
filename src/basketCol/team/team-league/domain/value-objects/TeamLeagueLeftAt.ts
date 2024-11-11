import { NullableDate } from '../../../../shared/domain/value-objects/NullableDate';

export class TeamLeagueLeftAt extends NullableDate {
  private constructor(value: string | null) {
    super(value, 'leftAt');
  }

  public static create(value: string | null): TeamLeagueLeftAt {
    return new TeamLeagueLeftAt(value);
  }
}
