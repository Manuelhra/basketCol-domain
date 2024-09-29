import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export class TeamFounderUserNotFoundError extends RootError {
  private constructor(teamFounderUserId: TeamFounderUserId) {
    const teamIdValue: string = teamFounderUserId.value;
    super(`Team founder user not found: The team with ID '${teamIdValue}' does not exist in the system.`);

    this.name = 'TeamFounderUserNotFoundError';
  }

  public static create(teamFounderUserId: TeamFounderUserId): TeamFounderUserNotFoundError {
    return new TeamFounderUserNotFoundError(teamFounderUserId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
