import { Stats } from '../../../../shared/domain/Stats';
import { IPlayerUserCareerStats } from './IPlayerUserCareerStats';
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

export class PlayerUserCareerStats extends Stats<IPlayerUserCareerStats> {
  readonly #playerUserId: PUCStatsPlayerUserId;

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
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new PUCStatsId(id),
      new PUCStatsTotalGamesPlayed(totalGamesPlayed),
      new PUCStatsTotalGamesWon(totalGamesWon),
      new PUCStatsTotalSeasonsLeaguePlayed(totalSeasonsLeaguePlayed),
      new PUCStatsTotalSeasonsLeagueWon(totalSeasonsLeagueWon),
      new PUCStatsTotalPoints(totalPoints),
      new PUCStatsTotalOffensiveRebounds(totalOffensiveRebounds),
      new PUCStatsTotalDefensiveRebounds(totalDefensiveRebounds),
      new PUCStatsTotalAssists(totalAssists),
      new PUCStatsTotalSteals(totalSteals),
      new PUCStatsTotalBlocks(totalBlocks),
      new PUCStatsTotalFouls(totalFouls),
      new PUCStatsTotalTurnovers(totalTurnovers),
      new PUCStatsTotalThreePointersAttempted(totalThreePointersAttempted),
      new PUCStatsTotalThreePointersMade(totalThreePointersMade),
      new PUCStatsTotalFreeThrowsAttempted(totalFreeThrowsAttempted),
      new PUCStatsTotalFreeThrowsMade(totalFreeThrowsMade),
      new PUCStatsTotalFieldGoalsAttempted(totalFieldGoalsAttempted),
      new PUCStatsTotalFieldGoalsMade(totalFieldGoalsMade),
      new PUCStatsCreatedAt(createdAt),
      new PUCStatsUpdatedAt(updatedAt),
    );

    this.#playerUserId = new PUCStatsPlayerUserId(playerUserId);
  }

  public toPrimitives(): IPlayerUserCareerStats {
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
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
