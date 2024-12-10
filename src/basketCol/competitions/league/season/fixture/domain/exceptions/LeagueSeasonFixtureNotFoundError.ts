import { RootError } from '../../../../../../shared/domain/exceptions/RootError';
import { LSFixtureId } from '../value-objects/LSFixtureId';

export class LeagueSeasonFixtureNotFoundError extends RootError {
  private constructor(leagueSeasonFixtureId: LSFixtureId) {
    super(`LeagueSeasonFixture not found: The league season fixture with ID '${leagueSeasonFixtureId.value}' does not exist in the system.`);

    this.name = 'LeagueSeasonFixtureNotFoundError';
  }

  public static create(leagueSeasonFixtureId: LSFixtureId): LeagueSeasonFixtureNotFoundError {
    return new LeagueSeasonFixtureNotFoundError(leagueSeasonFixtureId);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
