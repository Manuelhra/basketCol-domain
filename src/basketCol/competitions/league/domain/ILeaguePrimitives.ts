import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';
import { ILocationValueObjectProps } from '../../../shared/domain/value-objects/LocationValueObject';

export interface ILeaguePrimitives extends IAggregateRootPrimitives {
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
