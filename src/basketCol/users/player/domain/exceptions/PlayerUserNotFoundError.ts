import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { PlayerUserId } from '../value-objects/PlayerUserId';

export class PlayerUserNotFoundError extends RootError {
  constructor(playerUserId: PlayerUserId) {
    super(`PlayerUser not found: The user with ID '${playerUserId.getValue()}' does not exist in the system.`);

    this.name = 'PlayerUserNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

