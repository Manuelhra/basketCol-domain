import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface ILeague extends IAggregateRoot {
  name: {
    short: string;
    official: string;
  };
  description: {
    short: string;
    complete: string;
  };
  rules: string;
  level: string;
  location: ILocationValueObjectProps;
  establishmentDate: string;
  leagueFounderUserId: string;
  isActive: boolean;
}
