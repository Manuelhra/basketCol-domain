export interface LSGameCreatorPayload {
  id: string;
  date: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  gameType: string;
  gameDuration: number;
  headRefereeId: string;
  assistantRefereeId: string;
  courtId: string;
  leagueSeasonId: string;
}
