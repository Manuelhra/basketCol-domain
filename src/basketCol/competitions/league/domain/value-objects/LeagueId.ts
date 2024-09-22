import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class LeagueId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id'): LeagueId {
    return new LeagueId(value, propertyName);
  }
}
