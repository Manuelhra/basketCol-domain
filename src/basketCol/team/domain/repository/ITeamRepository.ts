import { IPaginatedResponse } from '../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../shared/domain/Nullable';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

export interface ITeamRepository {
  searchById(teamId: TeamId): Promise<Nullable<Team>>;
  save(team: Team): Promise<void>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<Team>>;
}
