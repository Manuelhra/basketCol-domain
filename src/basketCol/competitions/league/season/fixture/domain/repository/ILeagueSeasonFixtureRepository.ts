import { Nullable } from '../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixture } from '../LeagueSeasonFixture';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureId } from '../value-objects/LSFixtureId';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

export interface ILeagueSeasonFixtureRepository {
  save(leagueSeasonFixture: LeagueSeasonFixture): Promise<void>;
  searchByLeagueSeasonIdAndDate(leagueSeasonId: LSFixtureLeagueSeasonId, date: LSFixtureDate): Promise<Nullable<LeagueSeasonFixture>>;
  searchById(leagueSeasonFixtureId: LSFixtureId): Promise<Nullable<LeagueSeasonFixture>>;
}
