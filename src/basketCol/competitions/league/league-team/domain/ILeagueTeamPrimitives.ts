import { IAggregateRootPrimitives } from '../../../../shared/domain/IAggregateRootPrimitives';

export interface ILeagueTeamPrimitives extends IAggregateRootPrimitives {
  teamId: string;
  leagueId: string;
  status: string;
  joinedAt: string;
  leftAt: string | null;
  divisionLevel: string | null; // Para ligas con múltiples divisiones
  lastPromotionDate: string | null;
  lastRelegationDate: string | null;
}
