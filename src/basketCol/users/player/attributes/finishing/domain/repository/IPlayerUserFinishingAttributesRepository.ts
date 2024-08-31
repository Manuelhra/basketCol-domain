import { PlayerUserFinishingAttributes } from '../PlayerUserFinishingAttributes';

export interface IPlayerUserFinishingAttributesRepository {
  save(playerUserFinishingAttributes: PlayerUserFinishingAttributes): Promise<void>;
}
