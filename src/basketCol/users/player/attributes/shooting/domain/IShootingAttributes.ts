import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IShootingAttributes extends IAggregateRoot {
  closeShot: number;
  midRangeShot: number;
  threePointShot: number;
  freeThrow: number;
  playerUserId: string;
}
