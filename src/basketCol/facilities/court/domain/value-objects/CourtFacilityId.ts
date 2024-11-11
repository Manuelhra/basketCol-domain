import { NullableIdValueObject } from '../../../../shared/domain/value-objects/NullableIdValueObject';

export class CourtFacilityId extends NullableIdValueObject {
  private constructor(value: string | null) {
    super(value);
  }

  public static create(value: string | null): CourtFacilityId {
    return new CourtFacilityId(value);
  }
}
