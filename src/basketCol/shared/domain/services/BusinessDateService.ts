import { DateGreaterThanError } from '../exceptions/DateGreaterThanError';
import { DateValueObject } from '../value-objects/DateValueObject';

export class BusinessDateService {
  public getCurrentDate(): DateValueObject {
    return DateValueObject.getCurrentDate();
  }

  public formatDate(date: Date): DateValueObject {
    return DateValueObject.fromDate(date);
  }

  public ensureNotGreaterThan<T extends DateValueObject, U extends DateValueObject>(date1: T, date2: U): void {
    if (date1.toDate().getTime() > date2.toDate().getTime()) {
      throw new DateGreaterThanError(date1, date2);
    }
  }
}
