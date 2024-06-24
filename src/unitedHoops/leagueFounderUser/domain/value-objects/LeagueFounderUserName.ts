import InvalidArgumentError from '../../../shared/domain/exceptions/InvalidArgumentError';
import ValueObject from '../../../shared/domain/value-objects/ValueObject';

class LeagueFounderUserName extends ValueObject<{ firstName: string; lastName: string; }> {
  constructor(value: { firstName: string; lastName: string; }) {
    super(value, 'LeagueFounderUserName');

    this.ensureIsValidValue(value.firstName, 'first');
    this.ensureIsValidValue(value.lastName, 'last');
  }

  private ensureIsValidValue(value: string, label: 'first' | 'last'): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError(`The founder's ${label} name is required`);
    }

    if (typeof value !== 'string') {
      throw new InvalidArgumentError(`${this.capitalizeFirstLetter(label)} must be type string`);
    }
  }

  private capitalizeFirstLetter(str: string): string {
    if (str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

export default LeagueFounderUserName;
