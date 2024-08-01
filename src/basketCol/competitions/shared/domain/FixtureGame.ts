import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { SameRefereeError } from './exceptions/SameRefereeError';
import { SameTeamError } from './exceptions/SameTeamError';
import { IFixtureGame } from './IFixtureGame';
import { FGameAssistantRefereeId } from './value-object/FGameAssistantRefereeId';
import { FGameAwayScore } from './value-object/FGameAwayScore';
import { FGameAwayTeamId } from './value-object/FGameAwayTeamId';
import { FGameCreatedAt } from './value-object/FGameCreatedAt';
import { FGameDuration } from './value-object/FGameDuration';
import { FGameEndTime } from './value-object/FGameEndTime';
import { FGameFixtureId } from './value-object/FGameFixtureId';
import { FGameHeadRefereeId } from './value-object/FGameHeadRefereeId';
import { FGameHomeScore } from './value-object/FGameHomeScore';
import { FGameHomeTeamId } from './value-object/FGameHomeTeamId';
import { FGameId } from './value-object/FGameId';
import { FGameReferencedCourtId } from './value-object/FGameReferencedCourtId';
import { FGameStartTime } from './value-object/FGameStartTime';
import { FGameType } from './value-object/FGameType';
import { FGameUpdatedAt } from './value-object/FGameUpdatedAt';

export abstract class FixtureGame<I extends IFixtureGame> extends AggregateRoot<I> {
  protected readonly startTime: FGameStartTime;

  protected readonly endTime: FGameEndTime;

  protected readonly homeTeamId: FGameHomeTeamId;

  protected readonly awayTeamId: FGameAwayTeamId;

  protected readonly homeScore: FGameHomeScore;

  protected readonly awayScore: FGameAwayScore;

  protected readonly gameType: FGameType;

  protected readonly gameDuration: FGameDuration;

  protected readonly headRefereeId: FGameHeadRefereeId;

  protected readonly assistantRefereeId: FGameAssistantRefereeId;

  protected readonly courtId: FGameReferencedCourtId;

  protected readonly fixtureId: FGameFixtureId;

  constructor(
    id: FGameId,
    startTime: FGameStartTime,
    endTime: FGameEndTime,
    homeTeamId: FGameHomeTeamId,
    awayTeamId: FGameAwayTeamId,
    homeScore: FGameHomeScore,
    awayScore: FGameAwayScore,
    gameType: FGameType,
    gameDuration: FGameDuration,
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
    this.headRefereeId = headRefereeId;
    this.assistantRefereeId = assistantRefereeId;
    this.courtId = courtId;
    this.fixtureId = fixtureId;

    FixtureGame.ensureDifferentReferees(headRefereeId, assistantRefereeId);
    FixtureGame.ensureDifferentTeams(homeTeamId, awayTeamId);
  }

  private static ensureDifferentReferees(headRefereeId: FGameHeadRefereeId, assistantRefereeId: FGameAssistantRefereeId): void {
    if (headRefereeId.refereeUserIdAsString === assistantRefereeId.refereeUserIdAsString) {
      throw new SameRefereeError(headRefereeId.refereeUserIdAsString, assistantRefereeId.refereeUserIdAsString);
    }
  }

  private static ensureDifferentTeams(homeTeamId: FGameHomeTeamId, awayTeamId: FGameAwayTeamId): void {
    if (homeTeamId.teamIdAsString === awayTeamId.teamIdAsString) {
      throw new SameTeamError(homeTeamId.teamIdAsString, awayTeamId.teamIdAsString);
    }
  }
}
