import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserShootingAttributes } from '../PlayerUserShootingAttributes';
import { PUSAId } from '../value-objects/PUSAId';
import { PUSAReferencedPlayerUserId } from '../value-objects/PUSAReferencedPlayerUserId';

export interface IPlayerUserShootingAttributesRepository {
  save(playerUserShootingAttributes: PlayerUserShootingAttributes): Promise<void>;
  searchById(playerUserShootingAttributesId: PUSAId): Promise<Nullable<PlayerUserShootingAttributes>>;
  searchByPlayerUserId(pUSAReferencedPlayerUserId: PUSAReferencedPlayerUserId): Promise<Nullable<PlayerUserShootingAttributes>>;
}
