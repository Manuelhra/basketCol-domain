import { Nullable } from '../../../../../../../shared/domain/Nullable';
import { FixtureId } from '../../../../../../shared/domain/value-objects/FixtureId';
import { LeagueSeasonFixtureGame } from '../LeagueSeasonFixtureGame';
import { LSFGameId } from '../value-objects/LSFGameId';

export interface ILeagueSeasonFixtureGameRepository {
  save(leagueSeasonFixtureGame: LeagueSeasonFixtureGame): Promise<void>;
  findById(leagueSeasonFixtureGameId: LSFGameId): Promise<Nullable<LeagueSeasonFixtureGame>>;
  findAllByFixtureId(fixtureId: FixtureId): Promise<LeagueSeasonFixtureGame[]>;
}
