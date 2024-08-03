import { RootError } from '../../../../../../../shared/domain/exceptions/RootError';
import { LSFGameId } from '../value-objects/LSFGameId';

export class LeagueSeasonFixtureGameNotFoundError extends RootError {
  constructor(lSFGameId: LSFGameId) {
    super(`LeagueSeasonFixtureGame not found: The league season fixture game with ID '${lSFGameId.value}' does not exist in the system.`);

    this.name = 'LeagueSeasonFixtureGameNotFoundError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
