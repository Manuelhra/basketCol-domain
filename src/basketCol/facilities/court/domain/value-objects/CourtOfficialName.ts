import { FacilityOfficialName } from '../../../shared/domain/value-objects/FacilityOfficialName';

export class CourtOfficialName extends FacilityOfficialName {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): CourtOfficialName {
    return new CourtOfficialName(value);
  }
}
