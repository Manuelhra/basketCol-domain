import { IStats } from '../../../shared/domain/IStats';

export interface ITeamAllTimeStats extends IStats {
  teamId: string;
}
