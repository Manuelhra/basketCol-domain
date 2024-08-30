import { PlayerUserDefensiveAttributes } from '../PlayerUserDefensiveAttributes';

export interface IPlayerUserDefensiveAttributesRepository {
  save(playerUserDefensiveAttributes: PlayerUserDefensiveAttributes): Promise<void>;
}
