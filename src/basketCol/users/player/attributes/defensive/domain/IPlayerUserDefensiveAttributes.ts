import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IPlayerUserDefensiveAttributes extends IAggregateRoot {
  interiorDefense: number;
  perimeterDefense: number;
  steal: number;
  block: number;
  playerUserId: string;
}
