import { Game } from '../../../../shared/domain/Game';
import { ILeagueSeasonGame } from './ILeagueSeasonGame';
import { LSGameAssistantRefereeId } from './value-objects/LSGameAssistantRefereeId';
import { LSGameAwayScore } from './value-objects/LSGameAwayScore';
import { LSGameAwayTeamId } from './value-objects/LSGameAwayTeamId';
import { LSGameCourtId } from './value-objects/LSGameCourtId';
import { LSGameCreatedAt } from './value-objects/LSGameCreatedAt';
import { LSGameDate } from './value-objects/LSGameDate';
import { LSGameDuration } from './value-objects/LSGameDuration';
import { LSGameHeadRefereeId } from './value-objects/LSGameHeadRefereeId';
import { LSGameHomeScore } from './value-objects/LSGameHomeScore';
import { LSGameHomeTeamId } from './value-objects/LSGameHomeTeamId';
import { LSGameId } from './value-objects/LSGameId';
import { LSGameLeagueSeasonId } from './value-objects/LSGameLeagueSeasonId';
import { LSGameType } from './value-objects/LSGameType';
import { LSGameUpdatedAt } from './value-objects/LSGameUpdatedAt';

export class LeagueSeasonGame extends Game<ILeagueSeasonGame> {
  readonly #leagueSeasonId: LSGameLeagueSeasonId;

  constructor(
    id: string,
    date: string,
    homeTeamId: string,
    awayTeamId: string,
    homeScore: number,
    awayScore: number,
    gameType: string,
    gameDuration: number,
    headRefereeId: string,
    assistantRefereeId: string,
    courtId: string,
    leagueSeasonId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new LSGameId(id),
      new LSGameDate(date),
      new LSGameHomeTeamId(homeTeamId),
      new LSGameAwayTeamId(awayTeamId),
      new LSGameHomeScore(homeScore),
      new LSGameAwayScore(awayScore),
      new LSGameType(gameType),
      new LSGameDuration(gameDuration),
      new LSGameHeadRefereeId(headRefereeId),
      new LSGameAssistantRefereeId(assistantRefereeId),
      new LSGameCourtId(courtId),
      new LSGameCreatedAt(createdAt),
      new LSGameUpdatedAt(updatedAt),
    );

    this.#leagueSeasonId = new LSGameLeagueSeasonId(leagueSeasonId);
  }

  public toPrimitives(): ILeagueSeasonGame {
    return {
      id: this.id.value,
      date: this.date.value,
      homeTeamId: this.homeTeamId.teamIdAsString,
      awayTeamId: this.awayTeamId.teamIdAsString,
      homeScore: this.homeScore.value,
      awayScore: this.awayScore.value,
      gameType: this.gameType.value,
      gameDuration: this.gameDuration.value,
      headRefereeId: this.headRefereeId.refereeUserIdAsString,
      assistantRefereeId: this.assistantRefereeId.refereeUserIdAsString,
      courtId: this.courtId.courtIdAsString,
      leagueSeasonId: this.#leagueSeasonId.leagueSeasonIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
