import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class PhysicalAttributesId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
