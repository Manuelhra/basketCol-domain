import { NullableTimeValueObject } from '../../../../shared/domain/value-objects/NullableTimeValueObject';

export abstract class FGameEndTime extends NullableTimeValueObject {
  protected constructor(value: string | null) {
    super(value, 'endTime');
  }
}
