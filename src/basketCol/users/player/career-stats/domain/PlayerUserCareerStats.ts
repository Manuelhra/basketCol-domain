import { Stats } from '../../../../shared/domain/Stats';
import { IPlayerUserCareerStatsPrimitives } from './IPlayerUserCareerStatsPrimitives';
import { PUCStatsCreatedAt } from './value-objects/PUCStatsCreatedAt';
import { PUCStatsId } from './value-objects/PUCStatsId';
import { PUCStatsPlayerUserId } from './value-objects/PUCStatsPlayerUserId';
import { PUCStatsTotalAssists } from './value-objects/PUCStatsTotalAssists';
import { PUCStatsTotalBlocks } from './value-objects/PUCStatsTotalBlocks';
import { PUCStatsTotalDefensiveRebounds } from './value-objects/PUCStatsTotalDefensiveRebounds';
import { PUCStatsTotalFieldGoalsAttempted } from './value-objects/PUCStatsTotalFieldGoalsAttempted';
import { PUCStatsTotalFieldGoalsMade } from './value-objects/PUCStatsTotalFieldGoalsMade';
import { PUCStatsTotalFouls } from './value-objects/PUCStatsTotalFouls';
import { PUCStatsTotalFreeThrowsAttempted } from './value-objects/PUCStatsTotalFreeThrowsAttempted';
import { PUCStatsTotalFreeThrowsMade } from './value-objects/PUCStatsTotalFreeThrowsMade';
import { PUCStatsTotalGamesPlayed } from './value-objects/PUCStatsTotalGamesPlayed';
import { PUCStatsTotalGamesWon } from './value-objects/PUCStatsTotalGamesWon';
import { PUCStatsTotalOffensiveRebounds } from './value-objects/PUCStatsTotalOffensiveRebounds';
import { PUCStatsTotalPoints } from './value-objects/PUCStatsTotalPoints';
import { PUCStatsTotalSeasonsLeaguePlayed } from './value-objects/PUCStatsTotalSeasonsLeaguePlayed';
import { PUCStatsTotalSeasonsLeagueWon } from './value-objects/PUCStatsTotalSeasonsLeagueWon';
import { PUCStatsTotalSteals } from './value-objects/PUCStatsTotalSteals';
import { PUCStatsTotalThreePointersAttempted } from './value-objects/PUCStatsTotalThreePointersAttempted';
import { PUCStatsTotalThreePointersMade } from './value-objects/PUCStatsTotalThreePointersMade';
import { PUCStatsTotalTurnovers } from './value-objects/PUCStatsTotalTurnovers';
import { PUCStatsUpdatedAt } from './value-objects/PUCStatsUpdatedAt';

export class PlayerUserCareerStats extends Stats<IPlayerUserCareerStatsPrimitives> {
  readonly #playerUserId: PUCStatsPlayerUserId;

  private constructor(
    id: string,
    totalGamesPlayed: number,
    totalGamesWon: number,
    totalSeasonsLeaguePlayed: number,
    totalSeasonsLeagueWon: number,
    totalPoints: number,
    totalOffensiveRebounds: number,
    totalDefensiveRebounds: number,
    totalAssists: number,
    totalSteals: number,
    totalBlocks: number,
    totalFouls: number,
    totalTurnovers: number,
    totalThreePointersAttempted: number,
    totalThreePointersMade: number,
    totalFreeThrowsAttempted: number,
    totalFreeThrowsMade: number,
    totalFieldGoalsAttempted: number,
    totalFieldGoalsMade: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      PUCStatsId.create(id),
      PUCStatsTotalGamesPlayed.create(totalGamesPlayed),
      PUCStatsTotalGamesWon.create(totalGamesWon),
      PUCStatsTotalSeasonsLeaguePlayed.create(totalSeasonsLeaguePlayed),
      PUCStatsTotalSeasonsLeagueWon.create(totalSeasonsLeagueWon),
      PUCStatsTotalPoints.create(totalPoints),
      PUCStatsTotalOffensiveRebounds.create(totalOffensiveRebounds),
      PUCStatsTotalDefensiveRebounds.create(totalDefensiveRebounds),
      PUCStatsTotalAssists.create(totalAssists),
      PUCStatsTotalSteals.create(totalSteals),
      PUCStatsTotalBlocks.create(totalBlocks),
      PUCStatsTotalFouls.create(totalFouls),
      PUCStatsTotalTurnovers.create(totalTurnovers),
      PUCStatsTotalThreePointersAttempted.create(totalThreePointersAttempted),
      PUCStatsTotalThreePointersMade.create(totalThreePointersMade),
      PUCStatsTotalFreeThrowsAttempted.create(totalFreeThrowsAttempted),
      PUCStatsTotalFreeThrowsMade.create(totalFreeThrowsMade),
      PUCStatsTotalFieldGoalsAttempted.create(totalFieldGoalsAttempted),
      PUCStatsTotalFieldGoalsMade.create(totalFieldGoalsMade),
      PUCStatsCreatedAt.create(createdAt),
      PUCStatsUpdatedAt.create(updatedAt),
    );

    this.#playerUserId = PUCStatsPlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserCareerStatsPrimitives {
    return {
      id: this.id.value,
      totalGamesPlayed: this.totalGamesPlayed.value,
      totalGamesWon: this.totalGamesWon.value,
      totalSeasonsLeaguePlayed: this.totalSeasonsLeaguePlayed.value,
      totalSeasonsLeagueWon: this.totalSeasonsLeagueWon.value,
      totalPoints: this.totalPoints.value,
      totalOffensiveRebounds: this.totalOffensiveRebounds.value,
      totalDefensiveRebounds: this.totalDefensiveRebounds.value,
      totalAssists: this.totalAssists.value,
      totalSteals: this.totalSteals.value,
      totalBlocks: this.totalBlocks.value,
      totalFouls: this.totalFouls.value,
      totalTurnovers: this.totalTurnovers.value,
      totalThreePointersAttempted: this.totalThreePointersAttempted.value,
      totalThreePointersMade: this.totalThreePointersMade.value,
      totalFreeThrowsAttempted: this.totalFreeThrowsAttempted.value,
      totalFreeThrowsMade: this.totalFreeThrowsMade.value,
      totalFieldGoalsAttempted: this.totalFieldGoalsAttempted.value,
      totalFieldGoalsMade: this.totalFieldGoalsMade.value,
      playerUserId: this.#playerUserId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    totalGamesPlayed: number,
    totalGamesWon: number,
    totalSeasonsLeaguePlayed: number,
    totalSeasonsLeagueWon: number,
    totalPoints: number,
    totalOffensiveRebounds: number,
    totalDefensiveRebounds: number,
    totalAssists: number,
    totalSteals: number,
    totalBlocks: number,
    totalFouls: number,
    totalTurnovers: number,
    totalThreePointersAttempted: number,
    totalThreePointersMade: number,
    totalFreeThrowsAttempted: number,
    totalFreeThrowsMade: number,
    totalFieldGoalsAttempted: number,
    totalFieldGoalsMade: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserCareerStats {
    return new PlayerUserCareerStats(
      id,
      totalGamesPlayed,
      totalGamesWon,
      totalSeasonsLeaguePlayed,
      totalSeasonsLeagueWon,
      totalPoints,
      totalOffensiveRebounds,
      totalDefensiveRebounds,
      totalAssists,
      totalSteals,
      totalBlocks,
      totalFouls,
      totalTurnovers,
      totalThreePointersAttempted,
      totalThreePointersMade,
      totalFreeThrowsAttempted,
      totalFreeThrowsMade,
      totalFieldGoalsAttempted,
      totalFieldGoalsMade,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }

  public incrementStatsAfterGame(
    hasWonGame: boolean,
    points: number,
    offensiveRebounds: number,
    defensiveRebounds: number,
    assists: number,
    steals: number,
    blocks: number,
    fouls: number,
    turnovers: number,
    threePointersAttempted: number,
    threePointersMade: number,
    freeThrowsAttempted: number,
    freeThrowsMade: number,
    fieldGoalsAttempted: number,
    fieldGoalsMade: number,
    updatedAt: string,
  ): PlayerUserCareerStats {
    return PlayerUserCareerStats.create(
      this.id.value,
      this.totalGamesPlayed.value + 1,
      hasWonGame ? this.totalGamesWon.value + 1 : this.totalGamesWon.value,
      this.totalSeasonsLeaguePlayed.value,
      this.totalSeasonsLeagueWon.value,
      this.totalPoints.value + points,
      this.totalOffensiveRebounds.value + offensiveRebounds,
      this.totalDefensiveRebounds.value + defensiveRebounds,
      this.totalAssists.value + assists,
      this.totalSteals.value + steals,
      this.totalBlocks.value + blocks,
      this.totalFouls.value + fouls,
      this.totalTurnovers.value + turnovers,
      this.totalThreePointersAttempted.value + threePointersAttempted,
      this.totalThreePointersMade.value + threePointersMade,
      this.totalFreeThrowsAttempted.value + freeThrowsAttempted,
      this.totalFreeThrowsMade.value + freeThrowsMade,
      this.totalFieldGoalsAttempted.value + fieldGoalsAttempted,
      this.totalFieldGoalsMade.value + fieldGoalsMade,
      this.#playerUserId.value,
      this.createdAt.value,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    totalGamesPlayed: number,
    totalGamesWon: number,
    totalSeasonsLeaguePlayed: number,
    totalSeasonsLeagueWon: number,
    totalPoints: number,
    totalOffensiveRebounds: number,
    totalDefensiveRebounds: number,
    totalAssists: number,
    totalSteals: number,
    totalBlocks: number,
    totalFouls: number,
    totalTurnovers: number,
    totalThreePointersAttempted: number,
    totalThreePointersMade: number,
    totalFreeThrowsAttempted: number,
    totalFreeThrowsMade: number,
    totalFieldGoalsAttempted: number,
    totalFieldGoalsMade: number,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ): PlayerUserCareerStats {
    return new PlayerUserCareerStats(
      id,
      totalGamesPlayed,
      totalGamesWon,
      totalSeasonsLeaguePlayed,
      totalSeasonsLeagueWon,
      totalPoints,
      totalOffensiveRebounds,
      totalDefensiveRebounds,
      totalAssists,
      totalSteals,
      totalBlocks,
      totalFouls,
      totalTurnovers,
      totalThreePointersAttempted,
      totalThreePointersMade,
      totalFreeThrowsAttempted,
      totalFreeThrowsMade,
      totalFieldGoalsAttempted,
      totalFieldGoalsMade,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
