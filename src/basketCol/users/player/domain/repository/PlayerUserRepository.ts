import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUser } from '../PlayerUser';
import { PlayerUserId } from '../value-objects/PlayerUserId';

export interface PlayerUserRepository {
  searchById(playerUserId: PlayerUserId): Promise<Nullable<PlayerUser>>;
}
