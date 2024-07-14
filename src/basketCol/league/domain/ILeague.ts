import { ILeagueLocationProps } from './value-objects/LeagueLocation';

export interface ILeague {
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
  location: ILeagueLocationProps;
  creationDate: string;
  leagueFounderUserId: string;
  isActive: boolean;
}
