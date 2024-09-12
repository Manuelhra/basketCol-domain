import { FixtureGame } from '../../../../../shared/domain/FixtureGame';
import { ILeagueSeasonFixtureGame } from './ILeagueSeasonFixtureGame';
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
import { LSFGameStartTime } from './value-objects/LSFGameStartTime';
import { LSFGameType } from './value-objects/LSFGameType';
import { LSFGameUpdatedAt } from './value-objects/LSFGameUpdatedAt';

export class LeagueSeasonFixtureGame extends FixtureGame<ILeagueSeasonFixtureGame> {
  constructor(
    id: string,
    startTime: string,
    endTime: string | undefined,
    homeTeamId: string,
    awayTeamId: string,
    homeScore: number,
    awayScore: number,
    gameType: string,
    gameDuration: number,
    headRefereeId: string,
    assistantRefereeId: string,
    courtId: string,
    fixtureId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new LSFGameId(id),
      new LSFGameStartTime(startTime),
      new LSFGameEndTime(endTime),
      new LSFGameHomeTeamId(homeTeamId),
      new LSFGameAwayTeamId(awayTeamId),
      new LSFGameHomeScore(homeScore),
      new LSFGameAwayScore(awayScore),
      new LSFGameType(gameType),
      new LSFGameDuration(gameDuration),
      new LSFGameHeadRefereeId(headRefereeId),
      new LSFGameAssistantRefereeId(assistantRefereeId),
      new LSFGameCourtId(courtId),
      new LSFGameFixtureId(fixtureId),
      new LSFGameCreatedAt(createdAt),
      new LSFGameUpdatedAt(updatedAt),
    );
  }

  public override toPrimitives(): ILeagueSeasonFixtureGame {
    return {
      id: this.id.value,
      startTime: this.startTime.timeAsString,
      endTime: this.endTime.timeAsStringOrUndefined,
      homeTeamId: this.homeTeamId.teamIdAsString,
      awayTeamId: this.awayTeamId.teamIdAsString,
      homeScore: this.homeScore.value,
      awayScore: this.awayScore.value,
      gameType: this.gameType.value,
      gameDuration: this.gameDuration.value,
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
    endTime: string | undefined,
    homeTeamId: string,
    awayTeamId: string,
    homeScore: number,
    awayScore: number,
    gameType: string,
    gameDuration: number,
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
      headRefereeId,
      assistantRefereeId,
      courtId,
      fixtureId,
      createdAt,
      updatedAt,
    );
  }
}
