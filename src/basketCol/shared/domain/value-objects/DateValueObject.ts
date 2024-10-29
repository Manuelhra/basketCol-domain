import { InvalidDateFormatError } from '../exceptions/InvalidDateFormatError';
import { StringValueObject } from './StringValueObject';

export abstract class DateValueObject extends StringValueObject {
  static readonly #dataRegex: RegExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

  static readonly #DATE_FORMAT: string = 'DD/MM/YYYY' as const;

  protected constructor(value: string, propertyName: string) {
    super(value, propertyName);

    DateValueObject.ensureIsValidDate(value);
  }

  public get dateAsString(): string {
    return this.value;
  }

  public static fromDate(date: Date): DateValueObject {
    const dateString = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    return new (this as any)(dateString, 'date');
  }

  public static getCurrentDate(): DateValueObject {
    return this.fromDate(new Date());
  }

  public toDate(): Date {
    const [day, month, year] = this.value.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  public static ensureIsValidDate(value: string) {
    if (DateValueObject.#dataRegex.test(value) === false) {
      throw InvalidDateFormatError.create(value, DateValueObject.#DATE_FORMAT);
    }
  }
}
