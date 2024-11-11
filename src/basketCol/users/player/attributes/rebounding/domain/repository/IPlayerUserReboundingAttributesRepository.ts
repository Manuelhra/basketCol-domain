import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserReboundingAttributes } from '../PlayerUserReboundingAttributes';
import { PURAId } from '../value-objects/PURAId';
import { PURAPlayerUserId } from '../value-objects/PURAPlayerUserId';

export interface IPlayerUserReboundingAttributesRepository {
  save(playerUserReboundingAttributes: PlayerUserReboundingAttributes): Promise<void>;
  findById(playerUserReboundingAttributesId: PURAId): Promise<Nullable<PlayerUserReboundingAttributes>>;
  findByPlayerUserId(pURAPlayerUserId: PURAPlayerUserId): Promise<Nullable<PlayerUserReboundingAttributes>>;
}
