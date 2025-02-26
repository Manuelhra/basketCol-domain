import { TimeGreaterThanError } from '../exceptions/TimeGreaterThanError';
import { TimeValueObject } from '../value-objects/TimeValueObject';

export class BusinessTimeDomainService {
  public static create(): BusinessTimeDomainService {
    return new BusinessTimeDomainService();
  }

  public getCurrentTime(): TimeValueObject {
    return TimeValueObject.getCurrentTime();
  }

  public formatTime(date: Date): TimeValueObject {
    return TimeValueObject.fromDate(date);
  }

  public ensureNotGreaterThan<T extends TimeValueObject, U extends TimeValueObject>(time1: T, time2: U): void {
    if (time1.toDate().getTime() > time2.toDate().getTime()) {
      throw TimeGreaterThanError.create(time1, time2);
    }
  }
}
