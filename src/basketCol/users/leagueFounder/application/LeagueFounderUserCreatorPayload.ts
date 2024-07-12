export interface LeagueFounderUserCreatorPayload {
  id: string;
  name: { firstName: string; lastName: string; };
  biography: string;
  email: { value: string; };
  password: string;
}
