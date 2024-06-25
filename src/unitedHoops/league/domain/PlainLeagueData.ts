import { LeagueLocationProps } from './value-objects/LeagueLocation';

export interface PlainLeagueData {
  id: string;
  name: {
    short: string;
    official: string;
  };
  description: {
    short: string;
    complete: string;
  };
  rules: string;
  level: string;
  location: LeagueLocationProps;
  creationDate: string;
  founderUserId: string;
  isActive: boolean;
}
