import { ILocationValueObjectProps, LocationValueObject } from '../../../../shared/domain/value-objects/LocationValueObject';

export class GymLocation extends LocationValueObject {
  public constructor(value: ILocationValueObjectProps) {
    super(value);
  }
}
