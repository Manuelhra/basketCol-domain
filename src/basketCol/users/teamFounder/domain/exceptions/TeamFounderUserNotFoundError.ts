import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export class TeamFounderUserNotFoundError extends RootError {
  constructor(teamFounderUserId: TeamFounderUserId) {
    const teamIdValue: string = teamFounderUserId.getValue();
    super(`Team founder user not found: The team with ID '${teamIdValue}' does not exist in the system.`);

    this.name = 'TeamFounderUserNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
