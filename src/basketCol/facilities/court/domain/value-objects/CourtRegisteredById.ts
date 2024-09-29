import { FacilityRegisteredBy } from '../../../shared/domain/value-objects/FacilityRegisteredBy';

export class CourtRegisteredById extends FacilityRegisteredBy {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): CourtRegisteredById {
    return new CourtRegisteredById(value);
  }
}
