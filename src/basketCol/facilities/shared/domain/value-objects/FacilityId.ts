import { IdValueObject } from '../../../../shared/domain/value-objects/IdValueObject';

export class FacilityId extends IdValueObject {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string): FacilityId {
    return new FacilityId(value);
  }
}
