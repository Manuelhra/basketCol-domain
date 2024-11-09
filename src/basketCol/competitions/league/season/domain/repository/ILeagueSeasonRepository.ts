import { IPaginatedResponse } from '../../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueSeason } from '../LeagueSeason';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

export interface ILeagueSeasonRepository {
  save(leagueSeason: LeagueSeason): Promise<void>;
  findById(leagueSeasonId: LeagueSeasonId): Promise<Nullable<LeagueSeason>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<LeagueSeason>>;
}
