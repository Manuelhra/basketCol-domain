import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { PlayerUserId } from '../value-objects/PlayerUserId';

export class PlayerUserNotFoundError extends RootError {
  private constructor(playerUserId: PlayerUserId) {
    super(`PlayerUser not found: The user with ID '${playerUserId.value}' does not exist in the system.`);

    this.name = 'PlayerUserNotFoundError';
  }

  public static create(playerUserId: PlayerUserId): PlayerUserNotFoundError {
    return new PlayerUserNotFoundError(playerUserId);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
