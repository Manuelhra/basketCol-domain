import { FacilityId } from '../../../shared/domain/value-objects/FacilityId';

export class CourtId extends FacilityId {
  public constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
