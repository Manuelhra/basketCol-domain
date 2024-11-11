import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserShootingAttributes } from '../PlayerUserShootingAttributes';
import { PUSAId } from '../value-objects/PUSAId';
import { PUSAPlayerUserId } from '../value-objects/PUSAPlayerUserId';

export interface IPlayerUserShootingAttributesRepository {
  save(playerUserShootingAttributes: PlayerUserShootingAttributes): Promise<void>;
  findById(playerUserShootingAttributesId: PUSAId): Promise<Nullable<PlayerUserShootingAttributes>>;
  findByPlayerUserId(pUSAPlayerUserId: PUSAPlayerUserId): Promise<Nullable<PlayerUserShootingAttributes>>;
}
