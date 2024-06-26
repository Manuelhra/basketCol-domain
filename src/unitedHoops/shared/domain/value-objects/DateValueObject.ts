import InvalidDateFormatError from '../exceptions/InvalidDateFormatError';
import InvalidPropertyTypeError from '../exceptions/InvalidPropertyTypeError';
import StringValueObject from './StringValueObject';

class DateValueObject extends StringValueObject {
  static readonly #dataRegex: RegExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

  static readonly #DATE_FORMAT: string = 'DD/MM/YYYY' as const;

  constructor(value: string, propertyName: string) {
    super(value, propertyName);

    DateValueObject.ensureIsValidDate(value, propertyName);
  }

  private static ensureIsValidDate(value: string, propertyName: string) {
    if (value === null || value === undefined) {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }

    if (!DateValueObject.#dataRegex.test(value)) {
      throw new InvalidDateFormatError(value, DateValueObject.#DATE_FORMAT);
    }
  }
}

export default DateValueObject;
