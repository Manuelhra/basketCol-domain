import InvalidPropertyTypeError from '../../../../shared/domain/exceptions/InvalidPropertyTypeError';
import ValueObject from '../../../../shared/domain/value-objects/ValueObject';

class LeagueFounderUserName extends ValueObject<{ firstName: string; lastName: string; }> {
  constructor(value: { firstName: string; lastName: string; }) {
    super(value, 'name', '{ firstName: string; lastName: string; }');

    LeagueFounderUserName.ensureIsValidValue(value.firstName, 'firstName');
    LeagueFounderUserName.ensureIsValidValue(value.lastName, 'lastName');
  }

  private static ensureIsValidValue(value: string, propertyName: string): void {
    if (value === null || value === undefined || typeof value !== 'string') {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }
  }
}

export default LeagueFounderUserName;
