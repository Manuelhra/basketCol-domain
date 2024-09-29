import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUFAId extends IdValueObject {
  private constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id') {
    return new PUFAId(value, propertyName);
  }
}
