import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueSeason } from '../LeagueSeason';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

export interface ILeagueSeasonRepository {
  searchById(leagueSeasonId: LeagueSeasonId): Promise<Nullable<LeagueSeason>>;
  save(leagueSeason: LeagueSeason): Promise<void>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<LeagueSeason[]>;
}
