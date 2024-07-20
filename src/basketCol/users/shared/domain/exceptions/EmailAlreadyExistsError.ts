import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { UserEmail } from '../value-objects/UserEmail';

export class EmailAlreadyExistsError extends RootError {
  constructor(userEmail: UserEmail) {
    const { value } = userEmail.getValue();

    const message = `Uniqueness constraint violation: email '${value}' already exists in the system.`;
    super(message);
    this.name = 'EmailAlreadyExistsError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

