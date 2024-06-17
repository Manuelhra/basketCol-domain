import InvalidArgumentError from '../exceptions/InvalidArgumentError';
import StringValueObject from './StringValueObject';

abstract class DateValueObject extends StringValueObject {
  readonly #dataRegex: RegExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

  constructor(value: string) {
    super(value, 'DateValueObject');

    this.ensureIsValidDate(value);
  }

  private ensureIsValidDate(value: string) {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError('date field value must be defined');
    }

    if (!this.#dataRegex.test(value)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
    }
  }
}

export default DateValueObject;
