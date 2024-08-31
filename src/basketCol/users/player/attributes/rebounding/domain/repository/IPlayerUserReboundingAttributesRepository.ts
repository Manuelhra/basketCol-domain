import { PlayerUserReboundingAttributes } from '../PlayerUserReboundingAttributes';

export interface IPlayerUserReboundingAttributesRepository {
  save(playerUserReboundingAttributes: PlayerUserReboundingAttributes): Promise<void>;
}
