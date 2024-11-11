import { IPaginatedResponse } from '../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamLeague } from '../TeamLeague';
import { TeamLeagueId } from '../value-objects/TeamLeagueId';

export interface ITeamLeagueRepository {
  save(teamLeague: TeamLeague): Promise<void>;
  findById(teamLeagueId: TeamLeagueId): Promise<Nullable<TeamLeague>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<TeamLeague>>;
}
