import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IPlayerUserFinishingAttributes extends IAggregateRoot {
  drivingLayup: number;
  drivingDunk: number;
  standingDunk: number;
  postControl: number;
  playerUserId: string;
}
