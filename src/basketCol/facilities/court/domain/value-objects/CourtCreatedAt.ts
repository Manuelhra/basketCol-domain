import { FacilityCreatedAt } from '../../../shared/domain/value-objects/FacilityCreatedAt';

export class CourtCreatedAt extends FacilityCreatedAt {
  public constructor(value: string) {
    super(value);
  }
}
