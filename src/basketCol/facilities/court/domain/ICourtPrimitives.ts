import { IFacilityPrimitives } from '../../shared/domain/IFacilityPrimitives';

export interface ICourtPrimitives extends IFacilityPrimitives {
  surface: string;
  hoopHeight: { value: number; unit: string };
  facilityId: string | null;
}
