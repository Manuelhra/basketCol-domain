import { GymId } from '../../../facilities/gym/domain/value-objects/GymId';
import { FacilityId } from '../../../facilities/shared/domain/value-objects/FacilityId';
import { ValueObject } from './ValueObject';

type FACILITY_ID_TYPE = GymId | null;

export class NullableFacilityId extends ValueObject<FACILITY_ID_TYPE> {
  constructor(value: string | null) {
    const facilityId: FACILITY_ID_TYPE = value === null ? null : new FacilityId(value);

    super(facilityId, 'facilityId', 'string | null');

    if (facilityId !== null) {
      this.ensureIsFacilityId(facilityId);
    }
  }

  public get facilityIdAsStringOrNull(): string | null {
    return this.value === null ? null : this.value.value;
  }

  protected override ensureValueIsDefined(): void {}

  protected isValueEqual(otherValue: unknown): boolean {
    if (this.value === null && otherValue === null) {
      return true;
    }

    return super.isValueEqual(otherValue);
  }

  private ensureIsFacilityId(value: FacilityId): void {
    if (!(value instanceof FacilityId)) {
      throw new Error('InvalidFacilityIdInstanceError');
    }
  }
}
