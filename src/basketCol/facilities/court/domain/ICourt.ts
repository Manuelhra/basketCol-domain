import { IFacility } from '../../shared/domain/IFacility';

export interface ICourt extends IFacility {
  surface: string;
  hoopHeight: { value: number; unit: string };
  facilityId: string | null;
}
