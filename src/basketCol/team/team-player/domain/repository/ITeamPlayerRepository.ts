import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamPlayer } from '../TeamPlayer';
import { TeamPlayerId } from '../value-objects/TeamPlayerId';

export interface ITeamPlayerRepository {
  save(teamPlayer: TeamPlayer): Promise<void>;
  findById(teamPlayerId: TeamPlayerId): Promise<Nullable<TeamPlayer>>;
}
