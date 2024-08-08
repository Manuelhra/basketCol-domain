import { SkillAttributes } from '../SkillAttributes';

export interface ISkillAttributesRepository {
  save(skillAttributes: SkillAttributes): Promise<void>;
}
