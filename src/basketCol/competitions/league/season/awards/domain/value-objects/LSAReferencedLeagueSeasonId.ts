import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSAReferencedLeagueSeasonId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSAReferencedLeagueSeasonId {
    return new LSAReferencedLeagueSeasonId(value);
  }
}
