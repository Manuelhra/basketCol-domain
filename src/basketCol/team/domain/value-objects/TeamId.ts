import { IdValueObject } from '../../../shared/domain/value-objects/IdValueObject';

export class TeamId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id') {
    return new TeamId(value, propertyName);
  }
}
