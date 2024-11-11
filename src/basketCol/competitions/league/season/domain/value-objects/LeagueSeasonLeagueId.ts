import { IdValueObject } from '../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueSeasonLeagueId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueSeasonLeagueId {
    return new LeagueSeasonLeagueId(value);
  }
}
