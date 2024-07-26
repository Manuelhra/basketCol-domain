import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LeagueSeasonAwardsId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
