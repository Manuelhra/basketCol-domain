import { PlayerUserShootingAttributes } from '../PlayerUserShootingAttributes';

export interface IPlayerUserShootingAttributesRepository {
  save(playerUserShootingAttributes: PlayerUserShootingAttributes): Promise<void>;
}
