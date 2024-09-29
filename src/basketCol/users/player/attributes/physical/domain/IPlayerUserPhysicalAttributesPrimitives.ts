import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface IPlayerUserPhysicalAttributesPrimitives extends IAggregateRootPrimitives {
  speed: number;
  acceleration: number;
  strength: number;
  vertical: number;
  stamina: number;
  playerUserId: string;
}
