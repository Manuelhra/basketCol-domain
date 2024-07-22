import { IAggregateRoot } from '../../shared/domain/IAggregateRoot';

export interface ITeam extends IAggregateRoot {
  officialName: string;
  teamFounderUserId: string;
}
