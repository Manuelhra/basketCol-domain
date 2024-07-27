import { FacilityRegisteredBy } from '../../../shared/domain/value-objects/FacilityRegisteredBy';

export class CourtRegisteredById extends FacilityRegisteredBy {
  public constructor(value: string) {
    super(value);
  }
}
