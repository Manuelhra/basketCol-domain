import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUSAId extends IdValueObject {
  private constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id') {
    return new PUSAId(value, propertyName);
  }
}
