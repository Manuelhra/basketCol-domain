import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface ICourt extends IAggregateRoot {
  officialName: string;
  surface: string;
  hoopHeight: { value: number; unit: string };
  establishmentDate: string;
  registeredById: string;
  location: ILocationValueObjectProps;
  gymId: string | null;
}
