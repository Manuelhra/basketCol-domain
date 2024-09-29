import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';

export interface IFixtureGame extends IAggregateRootPrimitives {
  startTime: string;
  endTime: string | undefined;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  gameType: string;
  gameDuration: { value: number; unit: string };
  headRefereeId: string;
  assistantRefereeId: string;
  courtId: string;
  fixtureId: string;
}
