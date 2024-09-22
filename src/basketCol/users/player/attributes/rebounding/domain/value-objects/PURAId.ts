import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PURAId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id') {
    return new PURAId(value, propertyName);
  }
}
