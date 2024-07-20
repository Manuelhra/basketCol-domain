import { SkillAttributes } from '../SkillAttributes';

export interface SkillAttributesRepository {
  save(skillAttributes: SkillAttributes): Promise<void>;
}
