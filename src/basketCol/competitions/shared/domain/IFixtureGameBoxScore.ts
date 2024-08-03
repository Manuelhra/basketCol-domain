import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

interface IFixtureGameBoxScoreBasic {
  points: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  fouls: number;
  turnovers: number;
}

interface IFixtureGameBoxScoreShooting {
  threePointersAttempted: number;
  threePointersMade: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  fieldGoalsAttempted: number;
  fieldGoalsMade: number;
}

export interface IFixtureGameBoxScore extends IAggregateRoot, IFixtureGameBoxScoreBasic, IFixtureGameBoxScoreShooting {
  fixtureGameId: string;
}
