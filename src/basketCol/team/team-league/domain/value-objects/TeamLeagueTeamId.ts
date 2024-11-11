import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class TeamLeagueTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'teamId');
  }

  public static create(value: string): TeamLeagueTeamId {
    return new TeamLeagueTeamId(value);
  }
}
