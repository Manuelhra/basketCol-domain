import { IPaginatedResponse } from '../../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../../shared/domain/Nullable';
import { LeagueTeam } from '../LeagueTeam';
import { LeagueTeamStatus } from '../value-objects';
import { LeagueTeamId } from '../value-objects/LeagueTeamId';
import { LeagueTeamLeagueId } from '../value-objects/LeagueTeamLeagueId';
import { LeagueTeamTeamId } from '../value-objects/LeagueTeamTeamId';

export interface ILeagueTeamRepository {
  save(leagueTeam: LeagueTeam): Promise<void>;
  findById(leagueTeamId: LeagueTeamId): Promise<Nullable<LeagueTeam>>;
  findByLeagueIdAndTeamId(leagueId: LeagueTeamLeagueId, teamId: LeagueTeamTeamId): Promise<Nullable<LeagueTeam>>;
  findAllByLeagueId(leagueId: LeagueTeamLeagueId, status: LeagueTeamStatus): Promise<LeagueTeam[]>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<LeagueTeam>>;
}
