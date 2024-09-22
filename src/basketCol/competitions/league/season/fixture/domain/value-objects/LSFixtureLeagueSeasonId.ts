import { ReferencedLeagueSeasonId } from '../../../../../../shared/domain/value-objects/ReferencedLeagueSeasonId';

export class LSFixtureLeagueSeasonId extends ReferencedLeagueSeasonId {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSFixtureLeagueSeasonId {
    return new LSFixtureLeagueSeasonId(value);
  }
}
