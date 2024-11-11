import { IdValueObject } from '../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueTeamLeagueId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'leagueId');
  }

  public static create(value: string): LeagueTeamLeagueId {
    return new LeagueTeamLeagueId(value);
  }
}
