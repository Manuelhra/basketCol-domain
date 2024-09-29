import { ILocationValueObjectProps } from '../../../../shared/domain/value-objects/LocationValueObject';
import { FacilityLocation } from '../../../shared/domain/value-objects/FacilityLocation';

export class GymLocation extends FacilityLocation {
  private constructor(value: ILocationValueObjectProps) {
    super(value);
  }

  public static create(value: ILocationValueObjectProps): GymLocation {
    return new GymLocation(value);
  }
}
