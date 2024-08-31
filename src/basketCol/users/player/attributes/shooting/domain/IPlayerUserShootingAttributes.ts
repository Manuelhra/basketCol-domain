import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IPlayerUserShootingAttributes extends IAggregateRoot {
  closeShot: number;
  midRangeShot: number;
  threePointShot: number;
  freeThrow: number;
  playerUserId: string;
}
