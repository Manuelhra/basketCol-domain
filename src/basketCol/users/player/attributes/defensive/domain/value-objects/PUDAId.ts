import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PUDAId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id') {
    return new PUDAId(value, propertyName);
  }
}
