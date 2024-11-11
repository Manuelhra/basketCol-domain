import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserFinishingAttributes } from '../PlayerUserFinishingAttributes';
import { PUFAId } from '../value-objects/PUFAId';
import { PUFAPlayerUserId } from '../value-objects/PUFAPlayerUserId';

export interface IPlayerUserFinishingAttributesRepository {
  save(playerUserFinishingAttributes: PlayerUserFinishingAttributes): Promise<void>;
  findById(playerUserFinishingAttributesId: PUFAId): Promise<Nullable<PlayerUserFinishingAttributes>>;
  findByPlayerUserId(pUFAPlayerUserId: PUFAPlayerUserId): Promise<Nullable<PlayerUserFinishingAttributes>>;
}
