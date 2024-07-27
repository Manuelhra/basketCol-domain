import { ILocationValueObjectProps } from '../../../../shared/domain/value-objects/LocationValueObject';
import { FacilityLocation } from '../../../shared/domain/value-objects/FacilityLocation';

export class GymLocation extends FacilityLocation {
  public constructor(value: ILocationValueObjectProps) {
    super(value);
  }
}
