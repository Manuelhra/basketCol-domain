import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { HostUserId } from '../value-objects/HostUserId';

export class HostUserNotFoundError extends RootError {
  private constructor(hostUserId: HostUserId) {
    super(`HostUser not found: The user with ID '${hostUserId.value}' does not exist in the system.`);

    this.name = 'HostUserNotFoundError';
  }

  public static create(hostUserId: HostUserId): HostUserNotFoundError {
    return new HostUserNotFoundError(hostUserId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
