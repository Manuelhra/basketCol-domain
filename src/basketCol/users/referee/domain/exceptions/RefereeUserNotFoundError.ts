import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { RefereeUserId } from '../value-objects/RefereeUserId';

export class RefereeUserNotFoundError extends RootError {
  constructor(refereeUserId: RefereeUserId) {
    super(`RefereeUser not found: The user with ID '${refereeUserId.value}' does not exist in the system.`);

    this.name = 'RefereeUserNotFoundError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
