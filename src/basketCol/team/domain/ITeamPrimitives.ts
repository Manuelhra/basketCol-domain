import { IAggregateRootPrimitives } from '../../shared/domain/IAggregateRootPrimitives';

export interface ITeamPrimitives extends IAggregateRootPrimitives {
  officialName: string;
  teamFounderUserId: string;
}
