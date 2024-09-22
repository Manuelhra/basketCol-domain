import { NullableFacilityId } from '../../../../shared/domain/value-objects/NullableFacilityId';

export class CourtNullableFacilityId extends NullableFacilityId {
  public constructor(value: string | null) {
    super(value);
  }

  public static create(value: string | null): CourtNullableFacilityId {
    return new CourtNullableFacilityId(value);
  }
}
