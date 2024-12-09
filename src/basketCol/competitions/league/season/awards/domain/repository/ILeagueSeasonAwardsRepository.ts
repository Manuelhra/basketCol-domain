import { Nullable } from '../../../../../../shared/domain/Nullable';
import { LeagueSeasonAwards } from '../LeagueSeasonAwards';
import { LeagueSeasonAwardsId } from '../value-objects/LeagueSeasonAwardsId';
import { LSALeagueSeasonId } from '../value-objects/LSALeagueSeasonId';

export interface ILeagueSeasonAwardsRepository {
  findById(leagueSeasonAwardsId: LeagueSeasonAwardsId): Promise<Nullable<LeagueSeasonAwards>>;
  findByLeagueSeasonId(leagueSeasonId: LSALeagueSeasonId): Promise<Nullable<LeagueSeasonAwards>>;
  save(leagueSeasonAwards: LeagueSeasonAwards): Promise<void>;
}
