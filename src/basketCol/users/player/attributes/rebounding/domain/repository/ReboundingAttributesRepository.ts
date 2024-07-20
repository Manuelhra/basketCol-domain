import { ReboundingAttributes } from '../ReboundingAttributes';

export interface ReboundingAttributesRepository {
  save(reboundingAttributes: ReboundingAttributes): Promise<void>;
}
