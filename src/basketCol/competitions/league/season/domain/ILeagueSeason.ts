import { IAggregateRoot } from '../../../../shared/domain/IAggregateRoot';

export interface ILeagueSeason extends IAggregateRoot {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  gymIdList: string[];
  leagueId: string;
}
