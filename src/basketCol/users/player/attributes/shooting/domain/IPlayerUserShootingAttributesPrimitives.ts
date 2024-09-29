import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface IPlayerUserShootingAttributesPrimitives extends IAggregateRootPrimitives {
  closeShot: number;
  midRangeShot: number;
  threePointShot: number;
  freeThrow: number;
  playerUserId: string;
}
