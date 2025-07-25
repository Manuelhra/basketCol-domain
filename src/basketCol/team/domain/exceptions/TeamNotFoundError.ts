import { RootError } from '../../../shared/domain/exceptions/RootError';
import { TeamId } from '../value-objects/TeamId';

export class TeamNotFoundError extends RootError {
  private constructor(teamId: TeamId) {
    const teamIdValue: string = teamId.value;
    super(`Team not found: The team with ID '${teamIdValue}' does not exist in the system.`);

    this.name = 'TeamNotFoundError';
  }

  public static create(teamId: TeamId): TeamNotFoundError {
    return new TeamNotFoundError(teamId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
