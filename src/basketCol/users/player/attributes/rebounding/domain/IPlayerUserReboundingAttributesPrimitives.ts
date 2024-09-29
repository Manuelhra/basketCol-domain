import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface IPlayerUserReboundingAttributesPrimitives extends IAggregateRootPrimitives {
  offensiveRebound: number;
  defensiveRebound: number;
  playerUserId: string;
}
