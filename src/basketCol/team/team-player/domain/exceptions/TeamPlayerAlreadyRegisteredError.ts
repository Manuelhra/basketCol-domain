import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { PlayerUserId } from '../../../../users/player/domain/value-objects/PlayerUserId';
import { TeamId } from '../../../domain/value-objects/TeamId';

export class TeamPlayerAlreadyRegisteredError extends RootError {
  private constructor(playerUserId: PlayerUserId, teamId: TeamId) {
    const playerUserIdValue: string = playerUserId.value;
    const teamIdValue: string = teamId.value;
    super(`Player already registered: The player with ID '${playerUserIdValue}' is already registered in the team with ID '${teamIdValue}'.`);

    this.name = 'TeamPlayerAlreadyRegisteredError';
  }

  public static create(playerUserId: PlayerUserId, teamId: TeamId): TeamPlayerAlreadyRegisteredError {
    return new TeamPlayerAlreadyRegisteredError(playerUserId, teamId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
