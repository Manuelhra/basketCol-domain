import { TimeValueObject } from '../../../../shared/domain/value-objects/TimeValueObject';

export abstract class FGameStartTime extends TimeValueObject {
  protected constructor(value: string) {
    super(value, 'startTime');
  }
}
