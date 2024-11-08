import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { SameRefereeError } from './exceptions/SameRefereeError';
import { SameTeamError } from './exceptions/SameTeamError';
import { IFixtureGamePrimitives } from './IFixtureGamePrimitives';
import { FGameAssistantRefereeId } from './value-objects/FGameAssistantRefereeId';
import { FGameAwayScore } from './value-objects/FGameAwayScore';
import { FGameAwayTeamId } from './value-objects/FGameAwayTeamId';
import { FGameCreatedAt } from './value-objects/FGameCreatedAt';
import { FGameDuration } from './value-objects/FGameDuration';
import { FGameEndTime } from './value-objects/FGameEndTime';
import { FGameFixtureId } from './value-objects/FGameFixtureId';
import { FGameHeadRefereeId } from './value-objects/FGameHeadRefereeId';
import { FGameHomeScore } from './value-objects/FGameHomeScore';
import { FGameHomeTeamId } from './value-objects/FGameHomeTeamId';
import { FGameId } from './value-objects/FGameId';
import { FGameOvertime } from './value-objects/FGameOvertime';
import { FGameOvertimeNumber } from './value-objects/FGameOvertimeNumber';
import { FGameQuarter } from './value-objects/FGameQuarter';
import { FGameReferencedCourtId } from './value-objects/FGameReferencedCourtId';
import { FGameStartTime } from './value-objects/FGameStartTime';
import { FGameStatus } from './value-objects/FGameStatus';
import { FGameType } from './value-objects/FGameType';
import { FGameUpdatedAt } from './value-objects/FGameUpdatedAt';

export abstract class FixtureGame<I extends IFixtureGamePrimitives> extends AggregateRoot<I> {
  protected readonly startTime: FGameStartTime;

  protected readonly endTime: FGameEndTime;

  protected readonly homeTeamId: FGameHomeTeamId;

  protected readonly awayTeamId: FGameAwayTeamId;

  protected readonly homeScore: FGameHomeScore;

  protected readonly awayScore: FGameAwayScore;

  protected readonly gameType: FGameType;

  protected readonly gameDuration: FGameDuration;

  protected readonly quarter: FGameQuarter;

  protected readonly overtime: FGameOvertime;

  protected readonly overtimeNumber: FGameOvertimeNumber;

  protected readonly gameStatus: FGameStatus;

  protected readonly headRefereeId: FGameHeadRefereeId;

  protected readonly assistantRefereeId: FGameAssistantRefereeId;

  protected readonly courtId: FGameReferencedCourtId;

  protected readonly fixtureId: FGameFixtureId;

  protected constructor(
    id: FGameId,
    startTime: FGameStartTime,
    endTime: FGameEndTime,
    homeTeamId: FGameHomeTeamId,
    awayTeamId: FGameAwayTeamId,
    homeScore: FGameHomeScore,
    awayScore: FGameAwayScore,
    gameType: FGameType,
    gameDuration: FGameDuration,
    quarter: FGameQuarter,
    overtime: FGameOvertime,
    overtimeNumber: FGameOvertimeNumber,
    gameStatus: FGameStatus,
    headRefereeId: FGameHeadRefereeId,
    assistantRefereeId: FGameAssistantRefereeId,
    courtId: FGameReferencedCourtId,
    fixtureId: FGameFixtureId,
    createdAt: FGameCreatedAt,
    updatedAt: FGameUpdatedAt,
  ) {
    super(id, createdAt, updatedAt);

    this.startTime = startTime;
    this.endTime = endTime;
    this.homeTeamId = homeTeamId;
    this.awayTeamId = awayTeamId;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.gameType = gameType;
    this.gameDuration = gameDuration;
    this.quarter = quarter;
    this.overtime = overtime;
    this.overtimeNumber = overtimeNumber;
    this.gameStatus = gameStatus;
    this.headRefereeId = headRefereeId;
    this.assistantRefereeId = assistantRefereeId;
    this.courtId = courtId;
    this.fixtureId = fixtureId;

    FixtureGame.#ensureDifferentReferees(headRefereeId, assistantRefereeId);
    FixtureGame.#ensureDifferentTeams(homeTeamId, awayTeamId);
  }

  static #ensureDifferentReferees(headRefereeId: FGameHeadRefereeId, assistantRefereeId: FGameAssistantRefereeId): void {
    if (headRefereeId.refereeUserIdAsString === assistantRefereeId.refereeUserIdAsString) {
      throw SameRefereeError.create(headRefereeId.refereeUserIdAsString, assistantRefereeId.refereeUserIdAsString);
    }
  }

  static #ensureDifferentTeams(homeTeamId: FGameHomeTeamId, awayTeamId: FGameAwayTeamId): void {
    if (homeTeamId.teamIdAsString === awayTeamId.teamIdAsString) {
      throw SameTeamError.create(homeTeamId.teamIdAsString, awayTeamId.teamIdAsString);
    }
  }
}
