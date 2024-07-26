import { ValueObject } from '../../../../shared/domain/value-objects/ValueObject';
import { GymId } from '../../../gym/domain/value-objects/GymId';
import { FacilityId } from '../../../shared/domain/value-objects/FacilityId';

type FACILITY_ID_TYPE = GymId | null;

export class CourtFacilityId extends ValueObject<FACILITY_ID_TYPE> {
  constructor(value: string | null) {
    const facilityId: FACILITY_ID_TYPE = value === null ? null : new FacilityId(value);

    super(facilityId, 'facilityId', 'FacilityId | null');
  }

  public get facilityIdAsStringOrNull(): string | null {
    return this.value === null ? null : this.value.value;
  }

  protected ensureValueIsDefined(): void {}

  protected isValueEqual(otherValue: unknown): boolean {
    if (this.value === null && otherValue === null) {
      return true;
    }

    return super.isValueEqual(otherValue);
  }
}
