import { FacilityRegisteredBy } from '../../../shared/domain/value-objects/FacilityRegisteredBy';

export class GymRegisteredById extends FacilityRegisteredBy {
  public constructor(value: string) {
    super(value);
  }
}
