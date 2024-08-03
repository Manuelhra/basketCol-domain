import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface IFixtureGame extends IAggregateRoot {
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
