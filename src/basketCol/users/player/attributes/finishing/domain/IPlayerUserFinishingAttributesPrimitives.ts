import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface IPlayerUserFinishingAttributesPrimitives extends IAggregateRootPrimitives {
  drivingLayup: number;
  drivingDunk: number;
  standingDunk: number;
  postControl: number;
  playerUserId: string;
}
