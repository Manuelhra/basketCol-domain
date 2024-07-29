import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface IGame extends IAggregateRoot {
  date: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  gameType: string;
  gameDuration: number;
  headRefereeId: string;
  assistantRefereeId: string;
  courtId: string;
}
