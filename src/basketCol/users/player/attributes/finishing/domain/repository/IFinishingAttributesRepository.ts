import { FinishingAttributes } from '../FinishingAttributes';

export interface IFinishingAttributesRepository {
  save(finishingAttributes: FinishingAttributes): Promise<void>;
}
