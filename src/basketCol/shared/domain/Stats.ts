import { AggregateRoot } from './AggregateRoot';
import { IStatsPrimitives } from './IStatsPrimitives';
import { StatsCreatedAt } from './value-objects/StatsCreatedAt';
import { StatsId } from './value-objects/StatsId';
import { StatsTotalAssists } from './value-objects/StatsTotalAssists';
import { StatsTotalBlocks } from './value-objects/StatsTotalBlocks';
import { StatsTotalDefensiveRebounds } from './value-objects/StatsTotalDefensiveRebounds';
import { StatsTotalFieldGoalsAttempted } from './value-objects/StatsTotalFieldGoalsAttempted';
import { StatsTotalFieldGoalsMade } from './value-objects/StatsTotalFieldGoalsMade';
import { StatsTotalFouls } from './value-objects/StatsTotalFouls';
import { StatsTotalFreeThrowsAttempted } from './value-objects/StatsTotalFreeThrowsAttempted';
import { StatsTotalFreeThrowsMade } from './value-objects/StatsTotalFreeThrowsMade';
import { StatsTotalGamesPlayed } from './value-objects/StatsTotalGamesPlayed';
import { StatsTotalGamesWon } from './value-objects/StatsTotalGamesWon';
import { StatsTotalOffensiveRebounds } from './value-objects/StatsTotalOffensiveRebounds';
import { StatsTotalPoints } from './value-objects/StatsTotalPoints';
import { StatsTotalSeasonsLeaguePlayed } from './value-objects/StatsTotalSeasonsLeaguePlayed';
import { StatsTotalSeasonsLeagueWon } from './value-objects/StatsTotalSeasonsLeagueWon';
import { StatsTotalSteals } from './value-objects/StatsTotalSteals';
import { StatsTotalThreePointersAttempted } from './value-objects/StatsTotalThreePointersAttempted';
import { StatsTotalThreePointersMade } from './value-objects/StatsTotalThreePointersMade';
import { StatsTotalTurnovers } from './value-objects/StatsTotalTurnovers';
import { StatsUpdatedAt } from './value-objects/StatsUpdatedAt';

export abstract class Stats<I extends IStatsPrimitives> extends AggregateRoot<I> {
  protected readonly totalGamesPlayed: StatsTotalGamesPlayed;

  protected readonly totalGamesWon: StatsTotalGamesWon;

  protected readonly totalSeasonsLeaguePlayed: StatsTotalSeasonsLeaguePlayed;

  protected readonly totalSeasonsLeagueWon: StatsTotalSeasonsLeagueWon;

  protected readonly totalPoints: StatsTotalPoints;

  protected readonly totalOffensiveRebounds: StatsTotalOffensiveRebounds;

  protected readonly totalDefensiveRebounds: StatsTotalDefensiveRebounds;

  protected readonly totalAssists: StatsTotalAssists;

  protected readonly totalSteals: StatsTotalSteals;

  protected readonly totalBlocks: StatsTotalBlocks;

  protected readonly totalFouls: StatsTotalFouls;

  protected readonly totalTurnovers: StatsTotalTurnovers;

  protected readonly totalThreePointersAttempted: StatsTotalThreePointersAttempted;

  protected readonly totalThreePointersMade: StatsTotalThreePointersMade;

  protected readonly totalFreeThrowsAttempted: StatsTotalFreeThrowsAttempted;

  protected readonly totalFreeThrowsMade: StatsTotalFreeThrowsMade;

  protected readonly totalFieldGoalsAttempted: StatsTotalFieldGoalsAttempted;

  protected readonly totalFieldGoalsMade: StatsTotalFieldGoalsMade;

  protected constructor(
    id: StatsId,
    totalGamesPlayed: StatsTotalGamesPlayed,
    totalGamesWon: StatsTotalGamesWon,
    totalSeasonsLeaguePlayed: StatsTotalSeasonsLeaguePlayed,
    totalSeasonsLeagueWon: StatsTotalSeasonsLeagueWon,
    totalPoints: StatsTotalPoints,
    totalOffensiveRebounds: StatsTotalOffensiveRebounds,
    totalDefensiveRebounds: StatsTotalDefensiveRebounds,
    totalAssists: StatsTotalAssists,
    totalSteals: StatsTotalSteals,
    totalBlocks: StatsTotalBlocks,
    totalFouls: StatsTotalFouls,
    totalTurnovers: StatsTotalTurnovers,
    totalThreePointersAttempted: StatsTotalThreePointersAttempted,
    totalThreePointersMade: StatsTotalThreePointersMade,
    totalFreeThrowsAttempted: StatsTotalFreeThrowsAttempted,
    totalFreeThrowsMade: StatsTotalFreeThrowsMade,
    totalFieldGoalsAttempted: StatsTotalFieldGoalsAttempted,
    totalFieldGoalsMade: StatsTotalFieldGoalsMade,
    createdAt: StatsCreatedAt,
    updatedAt: StatsUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.totalGamesPlayed = totalGamesPlayed;
    this.totalGamesWon = totalGamesWon;
    this.totalSeasonsLeaguePlayed = totalSeasonsLeaguePlayed;
    this.totalSeasonsLeagueWon = totalSeasonsLeagueWon;
    this.totalPoints = totalPoints;
    this.totalOffensiveRebounds = totalOffensiveRebounds;
    this.totalDefensiveRebounds = totalDefensiveRebounds;
    this.totalAssists = totalAssists;
    this.totalSteals = totalSteals;
    this.totalBlocks = totalBlocks;
    this.totalFouls = totalFouls;
    this.totalTurnovers = totalTurnovers;
    this.totalThreePointersAttempted = totalThreePointersAttempted;
    this.totalThreePointersMade = totalThreePointersMade;
    this.totalFreeThrowsAttempted = totalFreeThrowsAttempted;
    this.totalFreeThrowsMade = totalFreeThrowsMade;
    this.totalFieldGoalsAttempted = totalFieldGoalsAttempted;
    this.totalFieldGoalsMade = totalFieldGoalsMade;
  }
}
