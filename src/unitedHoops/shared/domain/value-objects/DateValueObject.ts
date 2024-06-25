import InvalidDateFormatError from '../exceptions/InvalidDateFormatError';
import InvalidPropertyTypeError from '../exceptions/InvalidPropertyTypeError';
import StringValueObject from './StringValueObject';

class DateValueObject extends StringValueObject {
  readonly #dataRegex: RegExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

  readonly #DATE_FORMAT: string = 'DD/MM/YYYY' as const;

  constructor(value: string, propertyName: string) {
    super(value, propertyName);

    this.ensureIsValidDate(value, propertyName);
  }

  private ensureIsValidDate(value: string, propertyName: string) {
    if (value === null || value === undefined) {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }

    if (!this.#dataRegex.test(value)) {
      throw new InvalidDateFormatError(value, this.#DATE_FORMAT);
    }
  }
}

export default DateValueObject;
