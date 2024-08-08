import { Nullable } from '../../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixtureGame } from '../LeagueSeasonFixtureGame';
import { LSFGameId } from '../value-objects/LSFGameId';

export interface ILeagueSeasonFixtureGameRepository {
  save(leagueSeasonFixtureGame: LeagueSeasonFixtureGame): Promise<void>;
  searchById(leagueSeasonFixtureGameId: LSFGameId): Promise<Nullable<LeagueSeasonFixtureGame>>;
}
