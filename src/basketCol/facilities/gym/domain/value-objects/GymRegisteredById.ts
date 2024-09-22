import { FacilityRegisteredBy } from '../../../shared/domain/value-objects/FacilityRegisteredBy';

export class GymRegisteredById extends FacilityRegisteredBy {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): GymRegisteredById {
    return new GymRegisteredById(value);
  }
}
