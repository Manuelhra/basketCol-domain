import { FixtureGameBoxScore } from '../../../../../../../shared/domain/FixtureGameBoxScore';
import { ITeamLeagueSeasonFixtureGameBoxScore } from './ITeamLeagueSeasonFixtureGameBoxScore';
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

export class TeamLeagueSeasonFixtureGameBoxScore extends FixtureGameBoxScore<ITeamLeagueSeasonFixtureGameBoxScore> {
  readonly #teamId: TLSFGBoxScoreTeamId;

  public constructor(
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
      new TLSFGBoxScoreId(id),
      new TLSFGBoxScorePoints(points),
      new TLSFGBoxScoreOffensiveRebounds(offensiveRebounds),
      new TLSFGBoxScoreDefensiveRebounds(defensiveRebounds),
      new TLSFGBoxScoreAssists(assists),
      new TLSFGBoxScoreSteals(steals),
      new TLSFGBoxScoreBlocks(blocks),
      new TLSFGBoxScoreFouls(fouls),
      new TLSFGBoxScoreTurnovers(turnovers),
      new TLSFGBoxScoreThreePointersAttempted(threePointersAttempted),
      new TLSFGBoxScoreThreePointersMade(threePointersMade),
      new TLSFGBoxScoreFreeThrowsAttempted(freeThrowsAttempted),
      new TLSFGBoxScoreFreeThrowsMade(freeThrowsMade),
      new TLSFGBoxScoreFieldGoalsAttempted(fieldGoalsAttempted),
      new TLSFGBoxScoreFieldGoalsMade(fieldGoalsMade),
      new TLSFGBoxScoreFixtureGameId(fixtureGameId),
      new TLSFGBoxScoreCreatedAt(createdAt),
      new TLSFGBoxScoreUpdatedAt(updatedAt),
    );

    this.#teamId = new TLSFGBoxScoreTeamId(teamId);
  }

  public override toPrimitives(): ITeamLeagueSeasonFixtureGameBoxScore {
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
      teamId: this.#teamId.teamIdAsString,
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
}
