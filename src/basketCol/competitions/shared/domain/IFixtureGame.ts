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

// TODO: crear BoxScore
// Agregar hora de juego en Game, acá abajo está la propiedad de a hora que es startTime

/*
interface IGame extends IAuditableEntity {
  fixtureId: string;
  homeTeamId: string;
  awayTeamId: string;
  status: 'scheduled' | 'in_progress' | 'finished';
  startTime: Date;
  endTime?: Date;
  venue: string;
}

// Interfaces para el BoxScore
interface IBoxScoreBasic {
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
}

interface IBoxScoreShooting {
  fieldGoalsAttempted: number;
  fieldGoalsMade: number;
  threePointersAttempted: number;
  threePointersMade: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
}

interface IBoxScoreAdditional {
  minutesPlayed: number;
  plusMinus: number;
  fouls: number;
}

interface IBoxScore extends IAuditableEntity, IBoxScoreBasic, IBoxScoreShooting, IBoxScoreAdditional {
  gameId: string;
  teamId: string;
  playerId: string;
} */
