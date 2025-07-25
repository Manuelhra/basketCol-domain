import { FacilityUpdatedAt } from '../../../shared/domain/value-objects/FacilityUpdatedAt';

export class CourtUpdatedAt extends FacilityUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): CourtUpdatedAt {
    return new CourtUpdatedAt(value);
  }
}
