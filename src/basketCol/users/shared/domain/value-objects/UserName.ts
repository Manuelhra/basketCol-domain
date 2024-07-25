import { InvalidPropertyTypeError } from '../../../../shared/domain/exceptions/InvalidPropertyTypeError';
import { ValueObject } from '../../../../shared/domain/value-objects/ValueObject';

export interface IUserNameProps {
  firstName: string;
  lastName: string;
}

export abstract class UserName extends ValueObject<{ firstName: string; lastName: string; }> {
  protected constructor(value: IUserNameProps) {
    super(value, 'name', '{ firstName: string; lastName: string; }');

    this.ensureIsValidValue(value.firstName, 'firstName');
    this.ensureIsValidValue(value.lastName, 'lastName');
  }

  private ensureIsValidValue(value: string, propertyName: string): void {
    if (value === null || value === undefined || typeof value !== 'string') {
      throw new InvalidPropertyTypeError(propertyName, 'string', typeof value);
    }
  }
}
