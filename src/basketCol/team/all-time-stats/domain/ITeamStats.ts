import { IStats } from '../../../shared/domain/IStats';

export interface ITeamStats extends IStats {
  teamId: string;
}
