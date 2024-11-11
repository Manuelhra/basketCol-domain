import { IPaginatedResponse } from '../../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueTeam } from '../LeagueTeam';
import { LeagueTeamId } from '../value-objects/LeagueTeamId';

export interface ILeagueTeamRepository {
  save(teamLeague: LeagueTeam): Promise<void>;
  findById(teamLeagueId: LeagueTeamId): Promise<Nullable<LeagueTeam>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<LeagueTeam>>;
}
