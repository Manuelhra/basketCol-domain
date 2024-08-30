import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IPlayerUserPhysicalAttributes extends IAggregateRoot {
  speed: number;
  acceleration: number;
  strength: number;
  vertical: number;
  stamina: number;
  playerUserId: string;
}
