import { ReboundingAttributes } from '../ReboundingAttributes';

export interface IReboundingAttributesRepository {
  save(reboundingAttributes: ReboundingAttributes): Promise<void>;
}
