import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueSeasonAwardsId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id'): LeagueSeasonAwardsId {
    return new LeagueSeasonAwardsId(value, propertyName);
  }
}
