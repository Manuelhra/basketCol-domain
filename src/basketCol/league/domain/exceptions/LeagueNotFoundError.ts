import { RootError } from '../../../shared/domain/exceptions/RootError';
import { LeagueId } from '../value-objects/LeagueId';

export class LeagueNotFoundError extends RootError {
  constructor(leagueId: LeagueId) {
    const leagueIdValue: string = leagueId.getValue();
    super(`League not found: The league with ID '${leagueIdValue}' does not exist in the system.`);

    this.name = 'LeagueNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
