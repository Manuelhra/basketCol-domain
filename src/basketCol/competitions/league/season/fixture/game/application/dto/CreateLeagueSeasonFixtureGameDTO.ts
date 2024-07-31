export interface CreateLeagueSeasonFixtureGameDTO {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  gameType: string;
  gameDuration: number;
  headRefereeId: string;
  assistantRefereeId: string;
  courtId: string;
  fixtureId: string;
}
