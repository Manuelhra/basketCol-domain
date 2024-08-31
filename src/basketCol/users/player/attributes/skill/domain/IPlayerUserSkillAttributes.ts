import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IPlayerUserSkillAttributes extends IAggregateRoot {
  passAccuracy: number;
  ballHandle: number;
  speedWithBall: number;
  playerUserId: string;
}
