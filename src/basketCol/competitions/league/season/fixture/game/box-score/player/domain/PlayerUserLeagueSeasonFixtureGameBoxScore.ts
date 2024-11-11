import { FixtureGameBoxScore } from '../../../../../../../shared/domain/FixtureGameBoxScore';
import { IPlayerUserLeagueSeasonFixtureGameBoxScorePrimitives } from './IPlayerUserLeagueSeasonFixtureGameBoxScorePrimitives';
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

export class PlayerUserLeagueSeasonFixtureGameBoxScore extends FixtureGameBoxScore<IPlayerUserLeagueSeasonFixtureGameBoxScorePrimitives> {
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
      PLSFGBoxScoreId.create(id),
      PLSFGBoxScorePoints.create(points),
      PLSFGBoxScoreOffensiveRebounds.create(offensiveRebounds),
      PLSFGBoxScoreDefensiveRebounds.create(defensiveRebounds),
      PLSFGBoxScoreAssists.create(assists),
      PLSFGBoxScoreSteals.create(steals),
      PLSFGBoxScoreBlocks.create(blocks),
      PLSFGBoxScoreFouls.create(fouls),
      PLSFGBoxScoreTurnovers.create(turnovers),
      PLSFGBoxScoreThreePointersAttempted.create(threePointersAttempted),
      PLSFGBoxScoreThreePointersMade.create(threePointersMade),
      PLSFGBoxScoreFreeThrowsAttempted.create(freeThrowsAttempted),
      PLSFGBoxScoreFreeThrowsMade.create(freeThrowsMade),
      PLSFGBoxScoreFieldGoalsAttempted.create(fieldGoalsAttempted),
      PLSFGBoxScoreFieldGoalsMade.create(fieldGoalsMade),
      PLSFGBoxScoreFixtureGameId.create(fixtureGameId),
      PLSFGBoxScoreCreatedAt.create(createdAt),
      PLSFGBoxScoreUpdatedAt.create(updatedAt),
    );

    this.#playerUserId = PLSFGBoxScorePlayerUserId.create(playerUserId);
  }

  public override get toPrimitives(): IPlayerUserLeagueSeasonFixtureGameBoxScorePrimitives {
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
      fixtureGameId: this.fixtureGameId.value,
      playerUserId: this.#playerUserId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
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
  ): PlayerUserLeagueSeasonFixtureGameBoxScore {
    return new PlayerUserLeagueSeasonFixtureGameBoxScore(
      id,
      points,
      offensiveRebounds,
      defensiveRebounds,
      assists,
      steals,
      blocks,
      fouls,
      turnovers,
      threePointersAttempted,
      threePointersMade,
      freeThrowsAttempted,
      freeThrowsMade,
      fieldGoalsAttempted,
      fieldGoalsMade,
      fixtureGameId,
      playerUserId,
      createdAt,
      updatedAt,
    );
  }
}
