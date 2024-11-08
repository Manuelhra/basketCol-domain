import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';

export interface IFixtureGamePrimitives extends IAggregateRootPrimitives {
  startTime: string;
  endTime: string | null;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  gameType: string;
  gameDuration: { value: number; unit: string };
  quarter: number;
  overtime: boolean;
  overtimeNumber: number | null;
  gameStatus: string;
  headRefereeId: string;
  assistantRefereeId: string;
  courtId: string;
  fixtureId: string;
}
