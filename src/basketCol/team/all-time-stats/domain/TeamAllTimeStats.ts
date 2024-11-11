import { Stats } from '../../../shared/domain/Stats';
import { ITeamAllTimeStatsPrimitives } from './ITeamAllTimeStatsPrimitives';
import { TATStatsCreatedAt } from './value-objects/TATStatsCreatedAt';
import { TATStatsId } from './value-objects/TATStatsId';
import { TATStatsTeamId } from './value-objects/TATStatsTeamId';
import { TATStatsTotalAssists } from './value-objects/TATStatsTotalAssists';
import { TATStatsTotalBlocks } from './value-objects/TATStatsTotalBlocks';
import { TATStatsTotalDefensiveRebounds } from './value-objects/TATStatsTotalDefensiveRebounds';
import { TATStatsTotalFieldGoalsAttempted } from './value-objects/TATStatsTotalFieldGoalsAttempted';
import { TATStatsTotalFieldGoalsMade } from './value-objects/TATStatsTotalFieldGoalsMade';
import { TATStatsTotalFouls } from './value-objects/TATStatsTotalFouls';
import { TATStatsTotalFreeThrowsAttempted } from './value-objects/TATStatsTotalFreeThrowsAttempted';
import { TATStatsTotalFreeThrowsMade } from './value-objects/TATStatsTotalFreeThrowsMade';
import { TATStatsTotalGamesPlayed } from './value-objects/TATStatsTotalGamesPlayed';
import { TATStatsTotalGamesWon } from './value-objects/TATStatsTotalGamesWon';
import { TATStatsTotalOffensiveRebounds } from './value-objects/TATStatsTotalOffensiveRebounds';
import { TATStatsTotalPoints } from './value-objects/TATStatsTotalPoints';
import { TATStatsTotalSeasonsLeaguePlayed } from './value-objects/TATStatsTotalSeasonsLeaguePlayed';
import { TATStatsTotalSeasonsLeagueWon } from './value-objects/TATStatsTotalSeasonsLeagueWon';
import { TATStatsTotalSteals } from './value-objects/TATStatsTotalSteals';
import { TATStatsTotalThreePointersAttempted } from './value-objects/TATStatsTotalThreePointersAttempted';
import { TATStatsTotalThreePointersMade } from './value-objects/TATStatsTotalThreePointersMade';
import { TATStatsTotalTurnovers } from './value-objects/TATStatsTotalTurnovers';
import { TATStatsUpdatedAt } from './value-objects/TATStatsUpdatedAt';

export class TeamAllTimeStats extends Stats<ITeamAllTimeStatsPrimitives> {
  readonly #teamId: TATStatsTeamId;

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
    teamId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      TATStatsId.create(id),
      TATStatsTotalGamesPlayed.create(totalGamesPlayed),
      TATStatsTotalGamesWon.create(totalGamesWon),
      TATStatsTotalSeasonsLeaguePlayed.create(totalSeasonsLeaguePlayed),
      TATStatsTotalSeasonsLeagueWon.create(totalSeasonsLeagueWon),
      TATStatsTotalPoints.create(totalPoints),
      TATStatsTotalOffensiveRebounds.create(totalOffensiveRebounds),
      TATStatsTotalDefensiveRebounds.create(totalDefensiveRebounds),
      TATStatsTotalAssists.create(totalAssists),
      TATStatsTotalSteals.create(totalSteals),
      TATStatsTotalBlocks.create(totalBlocks),
      TATStatsTotalFouls.create(totalFouls),
      TATStatsTotalTurnovers.create(totalTurnovers),
      TATStatsTotalThreePointersAttempted.create(totalThreePointersAttempted),
      TATStatsTotalThreePointersMade.create(totalThreePointersMade),
      TATStatsTotalFreeThrowsAttempted.create(totalFreeThrowsAttempted),
      TATStatsTotalFreeThrowsMade.create(totalFreeThrowsMade),
      TATStatsTotalFieldGoalsAttempted.create(totalFieldGoalsAttempted),
      TATStatsTotalFieldGoalsMade.create(totalFieldGoalsMade),
      TATStatsCreatedAt.create(createdAt),
      TATStatsUpdatedAt.create(updatedAt),
    );

    this.#teamId = TATStatsTeamId.create(teamId);
  }

  public override get toPrimitives(): ITeamAllTimeStatsPrimitives {
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
      teamId: this.#teamId.value,
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
    teamId: string,
    createdAt: string,
    updatedAt: string,
  ): TeamAllTimeStats {
    return new TeamAllTimeStats(
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
      teamId,
      createdAt,
      updatedAt,
    );
  }
}
