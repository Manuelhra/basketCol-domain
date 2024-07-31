import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface IFixtureGame extends IAggregateRoot {
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

// TODO: Terminar flujo, crear referenced FixtureId y crear BoxScore
// Agregar hora de juego en Game
// Crear DTOS para todas las capas de application

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
