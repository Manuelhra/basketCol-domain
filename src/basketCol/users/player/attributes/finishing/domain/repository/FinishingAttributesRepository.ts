import { FinishingAttributes } from '../FinishingAttributes';

export interface FinishingAttributesRepository {
  save(finishingAttributes: FinishingAttributes): Promise<void>;
}
