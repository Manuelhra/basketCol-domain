import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';

export interface IFixturePrimitives extends IAggregateRootPrimitives {
  date: string;
  name: string | null;
}
