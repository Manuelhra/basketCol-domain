import { ILocationValueObjectProps, LocationValueObject } from '../../../../shared/domain/value-objects/LocationValueObject';

export class CourtLocation extends LocationValueObject {
  public constructor(value: ILocationValueObjectProps) {
    super(value);
  }
}
