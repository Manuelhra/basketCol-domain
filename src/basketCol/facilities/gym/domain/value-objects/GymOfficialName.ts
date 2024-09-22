import { FacilityOfficialName } from '../../../shared/domain/value-objects/FacilityOfficialName';

export class GymOfficialName extends FacilityOfficialName {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): GymOfficialName {
    return new GymOfficialName(value);
  }
}
