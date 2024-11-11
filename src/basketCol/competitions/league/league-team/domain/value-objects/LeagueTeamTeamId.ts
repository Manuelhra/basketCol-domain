import { IdValueObject } from '../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueTeamTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'teamId');
  }

  public static create(value: string): LeagueTeamTeamId {
    return new LeagueTeamTeamId(value);
  }
}
