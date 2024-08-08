import { DefensiveAttributes } from '../DefensiveAttributes';

export interface IDefensiveAttributesRepository {
  save(defensiveAttributes: DefensiveAttributes): Promise<void>;
}
