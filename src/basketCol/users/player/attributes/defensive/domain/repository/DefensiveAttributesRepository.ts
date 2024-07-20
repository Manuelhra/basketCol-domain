import DefensiveAttributes from '../DefensiveAttributes';

export interface DefensiveAttributesRepository {
  save(defensiveAttributes: DefensiveAttributes): Promise<void>;
}
