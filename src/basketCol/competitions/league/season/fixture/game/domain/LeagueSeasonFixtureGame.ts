import { Game } from '../../../../../shared/domain/Game';
import { ILeagueSeasonFixtureGame } from './ILeagueSeasonFixtureGame';

export class LeagueSeasonFixtureGame extends Game<ILeagueSeasonFixtureGame> {
  constructor(
    id: string,
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
      new LSGameId(id),
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
  }

  public toPrimitives(): ILeagueSeasonGame {
    return {
      id: this.id.value,
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
