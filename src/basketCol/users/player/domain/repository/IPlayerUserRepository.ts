import { Nullable } from '../../../../shared/domain/Nullable';
import { PlayerUser } from '../PlayerUser';
import { PlayerUserNickname } from '../value-objects';
import { PlayerUserId } from '../value-objects/PlayerUserId';
import { PlayerUserEmail } from '../value-objects/PlayerUserEmail';
import { IPaginatedResponse } from '../../../../shared/domain/IPaginatedResponse';

export interface IPlayerUserRepository {
  save(playerUser: PlayerUser): Promise<void>;
  findById(playerUserId: PlayerUserId): Promise<Nullable<PlayerUser>>;
  findByNickname(playerUserNickname: PlayerUserNickname): Promise<Nullable<PlayerUser>>;
  findByEmail(playerUserEmail: PlayerUserEmail): Promise<Nullable<PlayerUser>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<PlayerUser>>;
}
