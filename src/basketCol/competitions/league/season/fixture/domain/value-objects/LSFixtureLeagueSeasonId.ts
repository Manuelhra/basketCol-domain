import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSFixtureLeagueSeasonId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFixtureLeagueSeasonId {
    return new LSFixtureLeagueSeasonId(value);
  }
}
