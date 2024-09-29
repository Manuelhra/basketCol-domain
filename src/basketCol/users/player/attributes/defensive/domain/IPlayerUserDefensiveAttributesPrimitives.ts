import { IAggregateRootPrimitives } from '../../../../../shared/domain/IAggregateRootPrimitives';

export interface IPlayerUserDefensiveAttributesPrimitives extends IAggregateRootPrimitives {
  interiorDefense: number;
  perimeterDefense: number;
  steal: number;
  block: number;
  playerUserId: string;
}
