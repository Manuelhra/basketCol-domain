import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface IFacility extends IAggregateRoot {
  officialName: string;
  location: ILocationValueObjectProps;
  establishmentDate: string;
  registeredById: string;
}
