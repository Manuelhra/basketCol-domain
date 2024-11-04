import { NullableReferencedFacilityId } from '../../../../shared/domain/value-objects/NullableReferencedFacilityId';

export class CourtNullableReferencedFacilityId extends NullableReferencedFacilityId {
  private constructor(value: string | null) {
    super(value);
  }

  public static create(value: string | null): CourtNullableReferencedFacilityId {
    return new CourtNullableReferencedFacilityId(value);
  }
}
