import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUPAId extends IdValueObject {
  private constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id') {
    return new PUPAId(value, propertyName);
  }
}
