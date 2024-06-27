import EmailValueObject from '../value-objects/EmailValueObject';
import RootError from './RootError';

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
