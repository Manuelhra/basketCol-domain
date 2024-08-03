import { FixtureGameBoxScore } from '../../../../../../../shared/domain/FixtureGameBoxScore';
import { IPlayerUserLeagueSeasonFixtureGameBoxScore } from './IPlayerUserLeagueSeasonFixtureGameBoxScore';
import { PLSFGBoxScoreAssists } from './value-objects/PLSFGBoxScoreAssists';
import { PLSFGBoxScoreBlocks } from './value-objects/PLSFGBoxScoreBlocks';
import { PLSFGBoxScoreCreatedAt } from './value-objects/PLSFGBoxScoreCreatedAt';
import { PLSFGBoxScoreDefensiveRebounds } from './value-objects/PLSFGBoxScoreDefensiveRebounds';
import { PLSFGBoxScoreFieldGoalsAttempted } from './value-objects/PLSFGBoxScoreFieldGoalsAttempted';
import { PLSFGBoxScoreFieldGoalsMade } from './value-objects/PLSFGBoxScoreFieldGoalsMade';
import { PLSFGBoxScoreFixtureGameId } from './value-objects/PLSFGBoxScoreFixtureGameId';
import { PLSFGBoxScoreFouls } from './value-objects/PLSFGBoxScoreFouls';
import { PLSFGBoxScoreFreeThrowsAttempted } from './value-objects/PLSFGBoxScoreFreeThrowsAttempted';
import { PLSFGBoxScoreFreeThrowsMade } from './value-objects/PLSFGBoxScoreFreeThrowsMade';
import { PLSFGBoxScoreId } from './value-objects/PLSFGBoxScoreId';
import { PLSFGBoxScoreOffensiveRebounds } from './value-objects/PLSFGBoxScoreOffensiveRebounds';
import { PLSFGBoxScorePlayerUserId } from './value-objects/PLSFGBoxScorePlayerUserId';
import { PLSFGBoxScorePoints } from './value-objects/PLSFGBoxScorePoints';
import { PLSFGBoxScoreSteals } from './value-objects/PLSFGBoxScoreSteals';
import { PLSFGBoxScoreThreePointersAttempted } from './value-objects/PLSFGBoxScoreThreePointersAttempted';
import { PLSFGBoxScoreThreePointersMade } from './value-objects/PLSFGBoxScoreThreePointersMade';
import { PLSFGBoxScoreTurnovers } from './value-objects/PLSFGBoxScoreTurnovers';
import { PLSFGBoxScoreUpdatedAt } from './value-objects/PLSFGBoxScoreUpdatedAt';

export class PlayerUserLeagueSeasonFixtureGameBoxScore extends FixtureGameBoxScore<IPlayerUserLeagueSeasonFixtureGameBoxScore> {
  readonly #playerUserId: PLSFGBoxScorePlayerUserId;

  constructor(
    id: string,
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
    fixtureGameId: string,
    playerUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new PLSFGBoxScoreId(id),
      new PLSFGBoxScorePoints(points),
      new PLSFGBoxScoreOffensiveRebounds(offensiveRebounds),
      new PLSFGBoxScoreDefensiveRebounds(defensiveRebounds),
      new PLSFGBoxScoreAssists(assists),
      new PLSFGBoxScoreSteals(steals),
      new PLSFGBoxScoreBlocks(blocks),
      new PLSFGBoxScoreFouls(fouls),
      new PLSFGBoxScoreTurnovers(turnovers),
      new PLSFGBoxScoreThreePointersAttempted(threePointersAttempted),
      new PLSFGBoxScoreThreePointersMade(threePointersMade),
      new PLSFGBoxScoreFreeThrowsAttempted(freeThrowsAttempted),
      new PLSFGBoxScoreFreeThrowsMade(freeThrowsMade),
      new PLSFGBoxScoreFieldGoalsAttempted(fieldGoalsAttempted),
      new PLSFGBoxScoreFieldGoalsMade(fieldGoalsMade),
      new PLSFGBoxScoreFixtureGameId(fixtureGameId),
      new PLSFGBoxScoreCreatedAt(createdAt),
      new PLSFGBoxScoreUpdatedAt(updatedAt),
    );

    this.#playerUserId = new PLSFGBoxScorePlayerUserId(playerUserId);
  }

  public toPrimitives(): IPlayerUserLeagueSeasonFixtureGameBoxScore {
    return {
      id: this.id.value,
      points: this.points.value,
      offensiveRebounds: this.offensiveRebounds.value,
      defensiveRebounds: this.defensiveRebounds.value,
      assists: this.assists.value,
      steals: this.steals.value,
      blocks: this.blocks.value,
      fouls: this.fouls.value,
      turnovers: this.turnovers.value,
      threePointersAttempted: this.threePointersAttempted.value,
      threePointersMade: this.threePointersMade.value,
      freeThrowsAttempted: this.freeThrowsAttempted.value,
      freeThrowsMade: this.freeThrowsMade.value,
      fieldGoalsAttempted: this.fieldGoalsAttempted.value,
      fieldGoalsMade: this.fieldGoalsMade.value,
      fixtureGameId: this.fixtureGameId.fixtureGameIdAsString,
      playerUserId: this.#playerUserId.playerUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
