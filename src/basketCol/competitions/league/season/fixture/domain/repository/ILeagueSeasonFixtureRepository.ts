import { Nullable } from '../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixture } from '../LeagueSeasonFixture';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

export interface ILeagueSeasonFixtureRepository {
  save(leagueSeasonFixture: LeagueSeasonFixture): Promise<void>;
  findByLeagueSeasonIdAndDate(leagueSeasonId: LSFixtureLeagueSeasonId, date: LSFixtureDate): Promise<Nullable<LeagueSeasonFixture>>;
}
