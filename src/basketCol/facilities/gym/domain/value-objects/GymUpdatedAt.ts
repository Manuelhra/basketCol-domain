import { FacilityUpdatedAt } from '../../../shared/domain/value-objects/FacilityUpdatedAt';

export class GymUpdatedAt extends FacilityUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
