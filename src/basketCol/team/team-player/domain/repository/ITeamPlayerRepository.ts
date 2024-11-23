import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamPlayer } from '../TeamPlayer';
import { TeamPlayerId } from '../value-objects/TeamPlayerId';
import { TeamPlayerPlayerUserId } from '../value-objects/TeamPlayerPlayerUserId';
import { TeamPlayerTeamId } from '../value-objects/TeamPlayerTeamId';

export interface ITeamPlayerRepository {
  save(teamPlayer: TeamPlayer): Promise<void>;
  findById(teamPlayerId: TeamPlayerId): Promise<Nullable<TeamPlayer>>;
  findByTeamIdAndPlayerUserId(teamId: TeamPlayerTeamId, playerUserId: TeamPlayerPlayerUserId): Promise<Nullable<TeamPlayer>>;
  findAllActivePlayersByTeamId(teamId: TeamPlayerTeamId): Promise<TeamPlayer[]>;
}
