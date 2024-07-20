import PhysicalAttributes from '../PhysicalAttributes';

export interface PhysicalAttributesRepository {
  save(physicalAttributes: PhysicalAttributes): Promise<void>;
}
