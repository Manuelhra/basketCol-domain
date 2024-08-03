import { OptionalTimeValueObject } from '../../../../shared/domain/value-objects/OptionalTimeValueObject';

export abstract class FGameEndTime extends OptionalTimeValueObject {
  protected constructor(value: string | undefined) {
    super(value, 'endTime');
  }
}
