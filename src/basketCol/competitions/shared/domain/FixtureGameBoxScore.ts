import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { IFixtureGameBoxScore } from './IFixtureGameBoxScore';
import { FGBoxScoreAssists } from './value-objects/FGBoxScoreAssists';
import { FGBoxScoreBlocks } from './value-objects/FGBoxScoreBlocks';
import { FGBoxScoreCreatedAt } from './value-objects/FGBoxScoreCreatedAt';
import { FGBoxScoreDefensiveRebounds } from './value-objects/FGBoxScoreDefensiveRebounds';
import { FGBoxScoreFieldGoalsAttempted } from './value-objects/FGBoxScoreFieldGoalsAttempted';
import { FGBoxScoreFieldGoalsMade } from './value-objects/FGBoxScoreFieldGoalsMade';
import { FGBoxScoreFixtureGameId } from './value-objects/FGBoxScoreFixtureGameId';
import { FGBoxScoreFouls } from './value-objects/FGBoxScoreFouls';
import { FGBoxScoreFreeThrowsAttempted } from './value-objects/FGBoxScoreFreeThrowsAttempted';
import { FGBoxScoreFreeThrowsMade } from './value-objects/FGBoxScoreFreeThrowsMade';
import { FGBoxScoreId } from './value-objects/FGBoxScoreId';
import { FGBoxScoreOffensiveRebounds } from './value-objects/FGBoxScoreOffensiveRebounds';
import { FGBoxScorePoints } from './value-objects/FGBoxScorePoints';
import { FGBoxScoreSteals } from './value-objects/FGBoxScoreSteals';
import { FGBoxScoreThreePointersAttempted } from './value-objects/FGBoxScoreThreePointersAttempted';
import { FGBoxScoreThreePointersMade } from './value-objects/FGBoxScoreThreePointersMade';
import { FGBoxScoreTurnovers } from './value-objects/FGBoxScoreTurnovers';
import { FGBoxScoreUpdatedAt } from './value-objects/FGBoxScoreUpdatedAt';

export abstract class FixtureGameBoxScore<I extends IFixtureGameBoxScore> extends AggregateRoot<I> {
  protected readonly points: FGBoxScorePoints;

  protected readonly offensiveRebounds: FGBoxScoreOffensiveRebounds;

  protected readonly defensiveRebounds: FGBoxScoreDefensiveRebounds;

  protected readonly assists: FGBoxScoreAssists;

  protected readonly steals: FGBoxScoreSteals;

  protected readonly blocks: FGBoxScoreBlocks;

  protected readonly fouls: FGBoxScoreFouls;

  protected readonly turnovers: FGBoxScoreTurnovers;

  protected readonly threePointersAttempted: FGBoxScoreThreePointersAttempted;

  protected readonly threePointersMade: FGBoxScoreThreePointersMade;

  protected readonly freeThrowsAttempted: FGBoxScoreFreeThrowsAttempted;

  protected readonly freeThrowsMade: FGBoxScoreFreeThrowsMade;

  protected readonly fieldGoalsAttempted: FGBoxScoreFieldGoalsAttempted;

  protected readonly fieldGoalsMade: FGBoxScoreFieldGoalsMade;

  protected readonly fixtureGameId: FGBoxScoreFixtureGameId;

  protected constructor(
    id: FGBoxScoreId,
    points: FGBoxScorePoints,
    offensiveRebounds: FGBoxScoreOffensiveRebounds,
    defensiveRebounds: FGBoxScoreDefensiveRebounds,
    assists: FGBoxScoreAssists,
    steals: FGBoxScoreSteals,
    blocks: FGBoxScoreBlocks,
    fouls: FGBoxScoreFouls,
    turnovers: FGBoxScoreTurnovers,
    threePointersAttempted: FGBoxScoreThreePointersAttempted,
    threePointersMade: FGBoxScoreThreePointersMade,
    freeThrowsAttempted: FGBoxScoreFreeThrowsAttempted,
    freeThrowsMade: FGBoxScoreFreeThrowsMade,
    fieldGoalsAttempted: FGBoxScoreFieldGoalsAttempted,
    fieldGoalsMade: FGBoxScoreFieldGoalsMade,
    fixtureGameId: FGBoxScoreFixtureGameId,
    createdAt: FGBoxScoreCreatedAt,
    updatedAt: FGBoxScoreUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.points = points;
    this.offensiveRebounds = offensiveRebounds;
    this.defensiveRebounds = defensiveRebounds;
    this.assists = assists;
    this.steals = steals;
    this.blocks = blocks;
    this.fouls = fouls;
    this.turnovers = turnovers;
    this.threePointersAttempted = threePointersAttempted;
    this.threePointersMade = threePointersMade;
    this.freeThrowsAttempted = freeThrowsAttempted;
    this.freeThrowsMade = freeThrowsMade;
    this.fieldGoalsAttempted = fieldGoalsAttempted;
    this.fieldGoalsMade = fieldGoalsMade;
    this.fixtureGameId = fixtureGameId;
  }
}
