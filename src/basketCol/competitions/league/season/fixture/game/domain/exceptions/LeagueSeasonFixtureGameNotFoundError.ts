import { RootError } from '../../../../../../../shared/domain/exceptions/RootError';
import { LSFGameId } from '../value-objects/LSFGameId';

export class LeagueSeasonFixtureGameNotFoundError extends RootError {
  private constructor(lSFGameId: LSFGameId) {
    super(`LeagueSeasonFixtureGame not found: The league season fixture game with ID '${lSFGameId.value}' does not exist in the system.`);

    this.name = 'LeagueSeasonFixtureGameNotFoundError';
  }

  public static create(lSFGameId: LSFGameId): LeagueSeasonFixtureGameNotFoundError {
    return new LeagueSeasonFixtureGameNotFoundError(lSFGameId);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
