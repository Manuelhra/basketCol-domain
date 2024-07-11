export interface PlainLeagueFounderUserData {
  id: string;
  name: { firstName: string; lastName: string; };
  biography: string;
  email: { value: string; verified: boolean; };
  password: string;
  type: string;
  active: boolean;
}
