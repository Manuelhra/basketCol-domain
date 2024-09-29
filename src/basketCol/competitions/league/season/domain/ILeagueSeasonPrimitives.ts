import { IAggregateRootPrimitives } from '../../../../shared/domain/IAggregateRootPrimitives';

export interface ILeagueSeasonPrimitives extends IAggregateRootPrimitives {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  courtIdList: string[];
  leagueId: string;
}
