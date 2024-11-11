import { IdValueObject } from '../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueTeamId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueTeamId {
    return new LeagueTeamId(value);
  }
}
