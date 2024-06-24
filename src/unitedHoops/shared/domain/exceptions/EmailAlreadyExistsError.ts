import EmailValueObject from '../value-objects/EmailValueObject';

class EmailAlreadyExistsError extends Error {
  constructor(emailValueObject: EmailValueObject) {
    const { value } = emailValueObject.getValue();

    const message = `Uniqueness constraint violation: email '${value}' already exists in the system.`;
    super(message);
    this.name = 'EmailAlreadyExistsError';
  }
}

export default EmailAlreadyExistsError;
