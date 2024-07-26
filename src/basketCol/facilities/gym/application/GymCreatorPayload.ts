import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface GymCreatorPayload {
  id: string;
  officialName: string;
  location: ILocationValueObjectProps;
  establishmentDate: string;
  registeredById: string;
}
