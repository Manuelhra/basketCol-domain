import { PhysicalAttributes } from '../PhysicalAttributes';

export interface IPhysicalAttributesRepository {
  save(physicalAttributes: PhysicalAttributes): Promise<void>;
}
