import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IFinishingAttributes extends IAggregateRoot {
  drivingLayup: number;
  drivingDunk: number;
  standingDunk: number;
  postControl: number;
  playerUserId: string;
}
