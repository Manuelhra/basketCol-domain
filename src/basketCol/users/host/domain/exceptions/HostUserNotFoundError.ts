import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { HostUserId } from '../value-objects/HostUserId';

export class HostUserNotFoundError extends RootError {
  constructor(hostUserId: HostUserId) {
    super(`HostUser not found: The user with ID '${hostUserId.value}' does not exist in the system.`);

    this.name = 'HostUserNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
