import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUser } from '../PlayerUser';
import { PlayerUserNickname } from '../value-objects';
import { PlayerUserId } from '../value-objects/PlayerUserId';
import { PlayerUserEmail } from '../value-objects/PlayerUserEmail';

export interface IPlayerUserRepository {
  searchById(playerUserId: PlayerUserId): Promise<Nullable<PlayerUser>>;
  save(playerUser: PlayerUser): Promise<void>;
  searchByNickname(playerUserNickname: PlayerUserNickname): Promise<Nullable<PlayerUser>>;
  searchByEmail(playerUserEmail: PlayerUserEmail): Promise<Nullable<PlayerUser>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<PlayerUser[]>;
}
