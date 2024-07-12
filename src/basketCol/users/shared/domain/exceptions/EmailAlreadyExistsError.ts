import RootError from '../../../../shared/domain/exceptions/RootError';
import EmailValueObject from '../value-objects/EmailValueObject';

class EmailAlreadyExistsError extends RootError {
  constructor(emailValueObject: EmailValueObject) {
    const { value } = emailValueObject.getValue();

    const message = `Uniqueness constraint violation: email '${value}' already exists in the system.`;
    super(message);
    this.name = 'EmailAlreadyExistsError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default EmailAlreadyExistsError;
