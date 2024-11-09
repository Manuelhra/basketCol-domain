import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserFinishingAttributes } from '../PlayerUserFinishingAttributes';
import { PUFAId } from '../value-objects/PUFAId';
import { PUFAReferencedPlayerUserId } from '../value-objects/PUFAReferencedPlayerUserId';

export interface IPlayerUserFinishingAttributesRepository {
  save(playerUserFinishingAttributes: PlayerUserFinishingAttributes): Promise<void>;
  findById(playerUserFinishingAttributesId: PUFAId): Promise<Nullable<PlayerUserFinishingAttributes>>;
  findByPlayerUserId(pUFAReferencedPlayerUserId: PUFAReferencedPlayerUserId): Promise<Nullable<PlayerUserFinishingAttributes>>;
}
