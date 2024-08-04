import { IStats } from '../../../../shared/domain/IStats';

export interface IPlayerUserCareerStats extends IStats {
  playerUserId: string;
}
