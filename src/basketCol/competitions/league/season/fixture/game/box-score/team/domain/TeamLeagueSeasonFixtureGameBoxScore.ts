import { FixtureGameBoxScore } from '../../../../../../../shared/domain/FixtureGameBoxScore';
import { ITeamLeagueSeasonFixtureGameBoxScorePrimitives } from './ITeamLeagueSeasonFixtureGameBoxScorePrimitives';
import { TLSFGBoxScoreAssists } from './value-objects/TLSFGBoxScoreAssists';
import { TLSFGBoxScoreBlocks } from './value-objects/TLSFGBoxScoreBlocks';
import { TLSFGBoxScoreCreatedAt } from './value-objects/TLSFGBoxScoreCreatedAt';
import { TLSFGBoxScoreDefensiveRebounds } from './value-objects/TLSFGBoxScoreDefensiveRebounds';
import { TLSFGBoxScoreFieldGoalsAttempted } from './value-objects/TLSFGBoxScoreFieldGoalsAttempted';
import { TLSFGBoxScoreFieldGoalsMade } from './value-objects/TLSFGBoxScoreFieldGoalsMade';
import { TLSFGBoxScoreFixtureGameId } from './value-objects/TLSFGBoxScoreFixtureGameId';
import { TLSFGBoxScoreFouls } from './value-objects/TLSFGBoxScoreFouls';
import { TLSFGBoxScoreFreeThrowsAttempted } from './value-objects/TLSFGBoxScoreFreeThrowsAttempted';
import { TLSFGBoxScoreFreeThrowsMade } from './value-objects/TLSFGBoxScoreFreeThrowsMade';
import { TLSFGBoxScoreId } from './value-objects/TLSFGBoxScoreId';
import { TLSFGBoxScoreOffensiveRebounds } from './value-objects/TLSFGBoxScoreOffensiveRebounds';
import { TLSFGBoxScorePoints } from './value-objects/TLSFGBoxScorePoints';
import { TLSFGBoxScoreSteals } from './value-objects/TLSFGBoxScoreSteals';
import { TLSFGBoxScoreTeamId } from './value-objects/TLSFGBoxScoreTeamId';
import { TLSFGBoxScoreThreePointersAttempted } from './value-objects/TLSFGBoxScoreThreePointersAttempted';
import { TLSFGBoxScoreThreePointersMade } from './value-objects/TLSFGBoxScoreThreePointersMade';
import { TLSFGBoxScoreTurnovers } from './value-objects/TLSFGBoxScoreTurnovers';
import { TLSFGBoxScoreUpdatedAt } from './value-objects/TLSFGBoxScoreUpdatedAt';

export class TeamLeagueSeasonFixtureGameBoxScore extends FixtureGameBoxScore<ITeamLeagueSeasonFixtureGameBoxScorePrimitives> {
  readonly #teamId: TLSFGBoxScoreTeamId;

  private constructor(
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
    teamId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      TLSFGBoxScoreId.create(id),
      TLSFGBoxScorePoints.create(points),
      TLSFGBoxScoreOffensiveRebounds.create(offensiveRebounds),
      TLSFGBoxScoreDefensiveRebounds.create(defensiveRebounds),
      TLSFGBoxScoreAssists.create(assists),
      TLSFGBoxScoreSteals.create(steals),
      TLSFGBoxScoreBlocks.create(blocks),
      TLSFGBoxScoreFouls.create(fouls),
      TLSFGBoxScoreTurnovers.create(turnovers),
      TLSFGBoxScoreThreePointersAttempted.create(threePointersAttempted),
      TLSFGBoxScoreThreePointersMade.create(threePointersMade),
      TLSFGBoxScoreFreeThrowsAttempted.create(freeThrowsAttempted),
      TLSFGBoxScoreFreeThrowsMade.create(freeThrowsMade),
      TLSFGBoxScoreFieldGoalsAttempted.create(fieldGoalsAttempted),
      TLSFGBoxScoreFieldGoalsMade.create(fieldGoalsMade),
      TLSFGBoxScoreFixtureGameId.create(fixtureGameId),
      TLSFGBoxScoreCreatedAt.create(createdAt),
      TLSFGBoxScoreUpdatedAt.create(updatedAt),
    );

    this.#teamId = TLSFGBoxScoreTeamId.create(teamId);
  }

  public override get toPrimitives(): ITeamLeagueSeasonFixtureGameBoxScorePrimitives {
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
      teamId: this.#teamId.value,
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
    teamId: string,
    createdAt: string,
    updatedAt: string,
  ): TeamLeagueSeasonFixtureGameBoxScore {
    return new TeamLeagueSeasonFixtureGameBoxScore(
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
      teamId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
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
    teamId: string,
    createdAt: string,
    updatedAt: string,
  ): TeamLeagueSeasonFixtureGameBoxScore {
    return new TeamLeagueSeasonFixtureGameBoxScore(
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
      teamId,
      createdAt,
      updatedAt,
    );
  }
}
