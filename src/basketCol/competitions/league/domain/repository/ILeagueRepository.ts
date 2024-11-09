import { IPaginatedResponse } from '../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../shared/domain/Nullable';
import { League } from '../League';
import { LeagueId } from '../value-objects/LeagueId';
import { LeagueName } from '../value-objects/LeagueName';

export interface ILeagueRepository {
  save(league: League): Promise<void>;
  findByShortName(leagueName: LeagueName): Promise<Nullable<League>>;
  findByOfficialName(leagueName: LeagueName): Promise<Nullable<League>>;
  findById(leagueId: LeagueId): Promise<Nullable<League>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<League>>;
}
