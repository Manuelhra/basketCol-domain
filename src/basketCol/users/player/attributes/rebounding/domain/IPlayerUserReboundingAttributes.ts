import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IPlayerUserReboundingAttributes extends IAggregateRoot {
  offensiveRebound: number;
  defensiveRebound: number;
  playerUserId: string;
}
