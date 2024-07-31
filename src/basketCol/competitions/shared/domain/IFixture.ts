import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface IFixture extends IAggregateRoot {
  date: string;
  name: string | null;
}
