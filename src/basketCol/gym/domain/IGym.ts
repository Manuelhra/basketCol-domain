import { IAggregateRoot } from '../../shared/domain/IAggregateRoot';
import { ILocationValueObjectProps } from '../../shared/domain/value-objects/LocationValueObject';

export interface IGym extends IAggregateRoot {
  officialName: string;
  location: ILocationValueObjectProps;
  establishmentDate: string;
}
