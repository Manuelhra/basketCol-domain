import { FixtureGame } from '../../../../../shared/domain/FixtureGame';
import { ILeagueSeasonFixtureGamePrimitives } from './ILeagueSeasonFixtureGamePrimitives';
import { LSFGameAssistantRefereeId } from './value-objects/LSFGameAssistantRefereeId';
import { LSFGameAwayScore } from './value-objects/LSFGameAwayScore';
import { LSFGameAwayTeamId } from './value-objects/LSFGameAwayTeamId';
import { LSFGameCourtId } from './value-objects/LSFGameCourtId';
import { LSFGameCreatedAt } from './value-objects/LSFGameCreatedAt';
import { LSFGameDuration } from './value-objects/LSFGameDuration';
import { LSFGameEndTime } from './value-objects/LSFGameEndTime';
import { LSFGameFixtureId } from './value-objects/LSFGameFixtureId';
import { LSFGameHeadRefereeId } from './value-objects/LSFGameHeadRefereeId';
import { LSFGameHomeScore } from './value-objects/LSFGameHomeScore';
import { LSFGameHomeTeamId } from './value-objects/LSFGameHomeTeamId';
import { LSFGameId } from './value-objects/LSFGameId';
import { LSFGameOvertime } from './value-objects/LSFGameOvertime';
import { LSFGameOvertimeNumber } from './value-objects/LSFGameOvertimeNumber';
import { LSFGameQuarter } from './value-objects/LSFGameQuarter';
import { LSFGameStartTime } from './value-objects/LSFGameStartTime';
import { LSFGameStatus } from './value-objects/LSFGameStatus';
import { LSFGameType } from './value-objects/LSFGameType';
import { LSFGameUpdatedAt } from './value-objects/LSFGameUpdatedAt';

export class LeagueSeasonFixtureGame extends FixtureGame<ILeagueSeasonFixtureGamePrimitives> {
  private constructor(
    id: string,
    startTime: string,
    endTime: string | null,
    homeTeamId: string,
    awayTeamId: string,
    homeScore: number,
    awayScore: number,
    gameType: string,
    gameDuration: number,
    quarter: number,
    overtime: boolean,
    overtimeNumber: number | null,
    gameStatus: string,
    headRefereeId: string,
    assistantRefereeId: string,
    courtId: string,
    fixtureId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      LSFGameId.create(id),
      LSFGameStartTime.create(startTime),
      LSFGameEndTime.create(endTime),
      LSFGameHomeTeamId.create(homeTeamId),
      LSFGameAwayTeamId.create(awayTeamId),
      LSFGameHomeScore.create(homeScore),
      LSFGameAwayScore.create(awayScore),
      LSFGameType.create(gameType),
      LSFGameDuration.create(gameDuration),
      LSFGameQuarter.create(quarter),
      LSFGameOvertime.create(overtime),
      LSFGameOvertimeNumber.create(overtimeNumber),
      LSFGameStatus.create(gameStatus),
      LSFGameHeadRefereeId.create(headRefereeId),
      LSFGameAssistantRefereeId.create(assistantRefereeId),
      LSFGameCourtId.create(courtId),
      LSFGameFixtureId.create(fixtureId),
      LSFGameCreatedAt.create(createdAt),
      LSFGameUpdatedAt.create(updatedAt),
    );
  }

  public override get toPrimitives(): ILeagueSeasonFixtureGamePrimitives {
    return {
      id: this.id.value,
      startTime: this.startTime.timeAsString,
      endTime: this.endTime.timeAsStringOrNull,
      homeTeamId: this.homeTeamId.teamIdAsString,
      awayTeamId: this.awayTeamId.teamIdAsString,
      homeScore: this.homeScore.value,
      awayScore: this.awayScore.value,
      gameType: this.gameType.value,
      gameDuration: this.gameDuration.value,
      quarter: this.quarter.value,
      overtime: this.overtime.value,
      overtimeNumber: this.overtimeNumber.overtimeNumberAsNumberOrNull,
      gameStatus: this.gameStatus.value,
      headRefereeId: this.headRefereeId.refereeUserIdAsString,
      assistantRefereeId: this.assistantRefereeId.refereeUserIdAsString,
      courtId: this.courtId.courtIdAsString,
      fixtureId: this.fixtureId.fixtureIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    startTime: string,
    endTime: string | null,
    homeTeamId: string,
    awayTeamId: string,
    homeScore: number,
    awayScore: number,
    gameType: string,
    gameDuration: number,
    quarter: number,
    overtime: boolean,
    overtimeNumber: number | null,
    gameStatus: string,
    headRefereeId: string,
    assistantRefereeId: string,
    courtId: string,
    fixtureId: string,
    createdAt: string,
    updatedAt: string,
  ): LeagueSeasonFixtureGame {
    return new LeagueSeasonFixtureGame(
      id,
      startTime,
      endTime,
      homeTeamId,
      awayTeamId,
      homeScore,
      awayScore,
      gameType,
      gameDuration,
      quarter,
      overtime,
      overtimeNumber,
      gameStatus,
      headRefereeId,
      assistantRefereeId,
      courtId,
      fixtureId,
      createdAt,
      updatedAt,
    );
  }
}
