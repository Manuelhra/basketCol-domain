import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface CourtCreatorPayload {
  id: string;
  officialName: string;
  establishmentDate: string;
  surface: string;
  hoopHeight: number;
  registeredById: string;
  location: ILocationValueObjectProps;
  gymId: string | null | undefined;
}
