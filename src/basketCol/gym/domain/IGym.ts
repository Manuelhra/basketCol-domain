import { IAggregateRoot } from '../../shared/domain/IAggregateRoot';

export interface IGym extends IAggregateRoot {
  officialName: string;
}
