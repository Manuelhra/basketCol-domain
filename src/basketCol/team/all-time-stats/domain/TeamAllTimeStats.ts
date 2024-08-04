import { Stats } from '../../../shared/domain/Stats';
import { ITeamAllTimeStats } from './ITeamAllTimeStats';
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

export class TeamAllTimeStats extends Stats<ITeamAllTimeStats> {
  readonly #teamId: TATStatsTeamId;

  public constructor(
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
      new TATStatsId(id),
      new TATStatsTotalGamesPlayed(totalGamesPlayed),
      new TATStatsTotalGamesWon(totalGamesWon),
      new TATStatsTotalSeasonsLeaguePlayed(totalSeasonsLeaguePlayed),
      new TATStatsTotalSeasonsLeagueWon(totalSeasonsLeagueWon),
      new TATStatsTotalPoints(totalPoints),
      new TATStatsTotalOffensiveRebounds(totalOffensiveRebounds),
      new TATStatsTotalDefensiveRebounds(totalDefensiveRebounds),
      new TATStatsTotalAssists(totalAssists),
      new TATStatsTotalSteals(totalSteals),
      new TATStatsTotalBlocks(totalBlocks),
      new TATStatsTotalFouls(totalFouls),
      new TATStatsTotalTurnovers(totalTurnovers),
      new TATStatsTotalThreePointersAttempted(totalThreePointersAttempted),
      new TATStatsTotalThreePointersMade(totalThreePointersMade),
      new TATStatsTotalFreeThrowsAttempted(totalFreeThrowsAttempted),
      new TATStatsTotalFreeThrowsMade(totalFreeThrowsMade),
      new TATStatsTotalFieldGoalsAttempted(totalFieldGoalsAttempted),
      new TATStatsTotalFieldGoalsMade(totalFieldGoalsMade),
      new TATStatsCreatedAt(createdAt),
      new TATStatsUpdatedAt(updatedAt),
    );

    this.#teamId = new TATStatsTeamId(teamId);
  }

  public toPrimitives(): ITeamAllTimeStats {
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
      teamId: this.#teamId.teamIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
