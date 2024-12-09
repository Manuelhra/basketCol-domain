import { Nullable } from '../../../../../../shared/domain/Nullable';
import { LeagueSeasonAwards } from '../LeagueSeasonAwards';
import { LSALeagueSeasonId } from '../value-objects/LSALeagueSeasonId';

export interface ILeagueSeasonAwardsRepository {
  findByLeagueSeasonId(leagueSeasonId: LSALeagueSeasonId): Promise<Nullable<LeagueSeasonAwards>>;
  save(leagueSeasonAwards: LeagueSeasonAwards): Promise<void>;
}
