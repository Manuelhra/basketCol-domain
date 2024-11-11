import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSALeagueSeasonId extends IdValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LSALeagueSeasonId {
    return new LSALeagueSeasonId(value);
  }
}
