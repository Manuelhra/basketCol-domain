import { ILocationValueObjectProps } from '../../../../shared/domain/value-objects/LocationValueObject';
import { FacilityLocation } from '../../../shared/domain/value-objects/FacilityLocation';

export class CourtLocation extends FacilityLocation {
  public constructor(value: ILocationValueObjectProps) {
    super(value);
  }

  public static create(value: ILocationValueObjectProps): CourtLocation {
    return new CourtLocation(value);
  }
}
