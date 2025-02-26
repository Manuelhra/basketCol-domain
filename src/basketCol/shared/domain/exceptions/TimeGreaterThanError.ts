import { TimeValueObject } from '../value-objects/TimeValueObject';
import { RootError } from './RootError';

export class TimeGreaterThanError extends RootError {
  private constructor(time1: TimeValueObject, time2: TimeValueObject) {
    const message = `Time constraint violation: '${time1.value}' is greater than '${time2.value}'.`;
    super(message);
    this.name = 'TimeGreaterThanError';
  }

  public static create(time1: TimeValueObject, time2: TimeValueObject): TimeGreaterThanError {
    return new TimeGreaterThanError(time1, time2);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
