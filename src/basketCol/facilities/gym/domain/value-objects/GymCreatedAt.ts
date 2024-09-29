import { FacilityCreatedAt } from '../../../shared/domain/value-objects/FacilityCreatedAt';

export class GymCreatedAt extends FacilityCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): GymCreatedAt {
    return new GymCreatedAt(value);
  }
}
