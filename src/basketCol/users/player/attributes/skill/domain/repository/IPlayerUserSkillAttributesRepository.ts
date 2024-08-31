import { PlayerUserSkillAttributes } from '../PlayerUserSkillAttributes';

export interface IPlayerUserSkillAttributesRepository {
  save(playerUserSkillAttributes: PlayerUserSkillAttributes): Promise<void>;
}
