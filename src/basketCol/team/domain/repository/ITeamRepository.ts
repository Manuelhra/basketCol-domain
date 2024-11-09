import { IPaginatedResponse } from '../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../shared/domain/Nullable';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

export interface ITeamRepository {
  save(team: Team): Promise<void>;
  findById(teamId: TeamId): Promise<Nullable<Team>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<Team>>;
}
