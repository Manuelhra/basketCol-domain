import { GymId } from '../../../facilities/gym/domain/value-objects/GymId';
import { FacilityId } from '../../../facilities/shared/domain/value-objects/FacilityId';
import { InvalidFacilityIdInstanceError } from '../exceptions/InvalidFacilityIdInstanceError';
import { ValueObject } from './ValueObject';

type FACILITY_ID_TYPE = GymId | null;

export class NullableFacilityId extends ValueObject<FACILITY_ID_TYPE> {
  protected constructor(value: string | null) {
    const facilityId: FACILITY_ID_TYPE = value === null ? null : FacilityId.create(value);

    super(facilityId, 'facilityId', 'string | null', { allowNull: true });

    if (facilityId !== null) {
      this.#ensureIsFacilityId(facilityId);
    }
  }

  public static create(value: string | null): NullableFacilityId {
    return new NullableFacilityId(value);
  }

  public get facilityIdAsStringOrNull(): string | null {
    return this.value === null ? null : this.value.value;
  }

  protected isValueEqual(otherValue: unknown): boolean {
    if (this.value === null && otherValue === null) {
      return true;
    }

    return super.isValueEqual(otherValue);
  }

  #ensureIsFacilityId(value: FacilityId): void {
    if (!(value instanceof FacilityId)) {
      throw InvalidFacilityIdInstanceError.create();
    }
  }
}
