import { FacilityOfficialName } from '../../../shared/domain/value-objects/FacilityOfficialName';

export class CourtOfficialName extends FacilityOfficialName {
  public constructor(value: string) {
    super(value);
  }
}
