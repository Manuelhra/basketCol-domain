import { FacilityUpdatedAt } from '../../../shared/domain/value-objects/FacilityUpdatedAt';

export class CourtUpdatedAt extends FacilityUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
