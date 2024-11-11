import { NullableString } from '../../../../../shared/domain/value-objects/NullableString';

export class LeagueTeamDivisionLevel extends NullableString {
  private constructor(value: string | null) {
    super(value, 'divisionLevel');
  }

  public static create(value: string | null): LeagueTeamDivisionLevel {
    return new LeagueTeamDivisionLevel(value);
  }
}
