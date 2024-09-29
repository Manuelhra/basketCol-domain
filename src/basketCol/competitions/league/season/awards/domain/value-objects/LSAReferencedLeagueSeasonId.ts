import { ReferencedLeagueSeasonId } from '../../../../../../shared/domain/value-objects/ReferencedLeagueSeasonId';

export class LSAReferencedLeagueSeasonId extends ReferencedLeagueSeasonId {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSAReferencedLeagueSeasonId {
    return new LSAReferencedLeagueSeasonId(value);
  }
}
