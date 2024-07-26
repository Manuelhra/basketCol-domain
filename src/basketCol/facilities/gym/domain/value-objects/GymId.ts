import { FacilityId } from '../../../shared/domain/value-objects/FacilityId';

export class GymId extends FacilityId {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
