import { IAggregateRootPrimitives } from '../../../shared/domain/IAggregateRootPrimitives';

export interface ITeamPlayerPrimitives extends IAggregateRootPrimitives {
  teamId: string;
  playerUserId: string;
  status: string;
  jerseyNumber: number | null;
  position: string | null;
  joinedAt: string;
  leftAt: string | null;
}
