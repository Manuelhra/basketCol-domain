import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserShootingAttributes } from '../PlayerUserShootingAttributes';
import { PUSAId } from '../value-objects/PUSAId';
import { PUSAReferencedPlayerUserId } from '../value-objects/PUSAReferencedPlayerUserId';

export interface IPlayerUserShootingAttributesRepository {
  save(playerUserShootingAttributes: PlayerUserShootingAttributes): Promise<void>;
  findById(playerUserShootingAttributesId: PUSAId): Promise<Nullable<PlayerUserShootingAttributes>>;
  findByPlayerUserId(pUSAReferencedPlayerUserId: PUSAReferencedPlayerUserId): Promise<Nullable<PlayerUserShootingAttributes>>;
}
