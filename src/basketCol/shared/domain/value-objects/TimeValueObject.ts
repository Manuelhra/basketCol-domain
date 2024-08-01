import { InvalidTimeFormatError } from '../exceptions/InvalidTimeFormatError';
import { StringValueObject } from './StringValueObject';

export abstract class TimeValueObject extends StringValueObject {
  static readonly #timeRegex: RegExp = /^([01]\d|2[0-3]):([0-5]\d)$/;

  static readonly #TIME_FORMAT: string = 'HH:mm' as const;

  protected constructor(value: string, propertyName: string) {
    super(value, propertyName);

    TimeValueObject.ensureIsValidTime(value);
  }

  public get timeAsString(): string {
    return this.value;
  }

  public static fromDate(date: Date): TimeValueObject {
    const timeString = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    return new (this as any)(timeString, 'time');
  }

  public static getCurrentTime(): TimeValueObject {
    return this.fromDate(new Date());
  }

  public toDate(): Date {
    const [hours, minutes] = this.value.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  public static ensureIsValidTime(value: string) {
    if (TimeValueObject.#timeRegex.test(value) === false) {
      throw new InvalidTimeFormatError(value, TimeValueObject.#TIME_FORMAT);
    }
  }
}
