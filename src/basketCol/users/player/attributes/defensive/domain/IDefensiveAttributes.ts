import { IAggregateRoot } from '../../../../../shared/domain/IAggregateRoot';

export interface IDefensiveAttributes extends IAggregateRoot {
  interiorDefense: number;
  perimeterDefense: number;
  steal: number;
  block: number;
  playerUserId: string;
}
