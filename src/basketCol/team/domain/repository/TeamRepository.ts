import { Nullable } from '../../../shared/domain/Nullable';
import { Team } from '../Team';
import { TeamId } from '../value-objects/TeamId';

export interface TeamRepository {
  searchById(teamId: TeamId): Promise<Nullable<Team>>;
  save(team: Team): Promise<void>;
}
