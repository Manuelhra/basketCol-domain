import { Nullable } from '../../../../../../shared/domain/Nullable';
import { PlayerUserFinishingAttributes } from '../PlayerUserFinishingAttributes';
import { PUFAId } from '../value-objects/PUFAId';

export interface IPlayerUserFinishingAttributesRepository {
  save(playerUserFinishingAttributes: PlayerUserFinishingAttributes): Promise<void>;
  searchById(playerUserFinishingAttributesId: PUFAId): Promise<Nullable<PlayerUserFinishingAttributes>>;
}
