import { IPaginatedResponse } from '../../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueTeam } from '../LeagueTeam';
import { LeagueTeamId } from '../value-objects/LeagueTeamId';

export interface ILeagueTeamRepository {
  save(leagueTeam: LeagueTeam): Promise<void>;
  findById(leagueTeamId: LeagueTeamId): Promise<Nullable<LeagueTeam>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<LeagueTeam>>;
}
