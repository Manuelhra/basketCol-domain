import { IdValueObject } from '../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueSeasonId extends IdValueObject {
  private constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id'): LeagueSeasonId {
    return new LeagueSeasonId(value, propertyName);
  }
}
