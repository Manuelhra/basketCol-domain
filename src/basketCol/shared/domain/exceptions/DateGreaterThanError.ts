import { DateValueObject } from '../value-objects/DateValueObject';
import { RootError } from './RootError';

export class DateGreaterThanError extends RootError {
  private constructor(date1: DateValueObject, date2: DateValueObject) {
    const message = `Date constraint violation: '${date1.value}' is greater than '${date2.value}'.`;
    super(message);
    this.name = 'DateGreaterThanError';
  }

  public static create(date1: DateValueObject, date2: DateValueObject): DateGreaterThanError {
    return new DateGreaterThanError(date1, date2);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
