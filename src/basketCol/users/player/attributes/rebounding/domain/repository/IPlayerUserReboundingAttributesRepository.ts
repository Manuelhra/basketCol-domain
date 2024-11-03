import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserReboundingAttributes } from '../PlayerUserReboundingAttributes';
import { PURAId } from '../value-objects/PURAId';
import { PURAReferencedPlayerUserId } from '../value-objects/PURAReferencedPlayerUserId';

export interface IPlayerUserReboundingAttributesRepository {
  save(playerUserReboundingAttributes: PlayerUserReboundingAttributes): Promise<void>;
  searchById(playerUserReboundingAttributesId: PURAId): Promise<Nullable<PlayerUserReboundingAttributes>>;
  searchByPlayerUserId(pURAReferencedPlayerUserId: PURAReferencedPlayerUserId): Promise<Nullable<PlayerUserReboundingAttributes>>;
}
