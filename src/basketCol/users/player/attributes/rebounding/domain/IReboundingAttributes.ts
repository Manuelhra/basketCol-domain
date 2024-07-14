import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IReboundingAttributes extends IAggregateRoot {
  offensiveRebound: number;
  defensiveRebound: number;
  playerUserId: string;
}
