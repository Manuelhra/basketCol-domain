import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface IPlayerUserSkillAttributesPrimitives extends IAggregateRootPrimitives {
  passAccuracy: number;
  ballHandle: number;
  speedWithBall: number;
  playerUserId: string;
}
