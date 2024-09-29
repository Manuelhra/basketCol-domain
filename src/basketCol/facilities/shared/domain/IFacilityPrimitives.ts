import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface IFacilityPrimitives extends IAggregateRootPrimitives {
  officialName: string;
  location: ILocationValueObjectProps;
  establishmentDate: string;
  registeredById: string;
}
