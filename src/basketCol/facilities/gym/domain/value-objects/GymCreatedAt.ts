import { FacilityCreatedAt } from '../../../shared/domain/value-objects/FacilityCreatedAt';

export class GymCreatedAt extends FacilityCreatedAt {
  public constructor(value: string) {
    super(value);
  }
}
