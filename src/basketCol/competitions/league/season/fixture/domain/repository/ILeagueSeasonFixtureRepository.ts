import { IPaginatedResponse } from '../../../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../../../shared/domain/Nullable';
import { LeagueSeasonFixture } from '../LeagueSeasonFixture';
import { LSFixtureDate } from '../value-objects/LSFixtureDate';
import { LSFixtureId } from '../value-objects/LSFixtureId';
import { LSFixtureLeagueSeasonId } from '../value-objects/LSFixtureLeagueSeasonId';

export interface ILeagueSeasonFixtureRepository {
  save(leagueSeasonFixture: LeagueSeasonFixture): Promise<void>;
  findByLeagueSeasonIdAndDate(leagueSeasonId: LSFixtureLeagueSeasonId, date: LSFixtureDate): Promise<Nullable<LeagueSeasonFixture>>;
  findById(leagueSeasonFixtureId: LSFixtureId): Promise<Nullable<LeagueSeasonFixture>>;
  findAllByLeagueSeasonId(leagueSeasonId: LSFixtureLeagueSeasonId): Promise<LeagueSeasonFixture[]>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<LeagueSeasonFixture>>;
}
