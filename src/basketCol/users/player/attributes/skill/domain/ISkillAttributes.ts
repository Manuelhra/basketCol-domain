import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface ISkillAttributes extends IAggregateRoot {
  passAccuracy: number;
  ballHandle: number;
  speedWithBall: number;
  playerUserId: string;
}
