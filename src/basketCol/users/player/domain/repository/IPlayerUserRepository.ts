import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUser } from '../PlayerUser';
import { PlayerUserId } from '../value-objects/PlayerUserId';

export interface IPlayerUserRepository {
  searchById(playerUserId: PlayerUserId): Promise<Nullable<PlayerUser>>;
  save(playerUser: PlayerUser): Promise<void>;
}
