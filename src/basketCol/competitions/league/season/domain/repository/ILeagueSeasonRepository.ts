import { IPaginatedResponse } from '../../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueSeason } from '../LeagueSeason';
import { LeagueSeasonLeagueId } from '../value-objects';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

export interface ILeagueSeasonRepository {
  save(leagueSeason: LeagueSeason): Promise<void>;
  findById(leagueSeasonId: LeagueSeasonId): Promise<Nullable<LeagueSeason>>;
  findAllByLeagueId(leagueId: LeagueSeasonLeagueId): Promise<LeagueSeason[]>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<LeagueSeason>>;
}
