import { Nullable } from '../../../../shared/domain/Nullable';
import { League } from '../League';
import { LeagueId } from '../value-objects/LeagueId';
import { LeagueName } from '../value-objects/LeagueName';

export interface ILeagueRepository {
  save(league: League): Promise<void>;
  searchByShortName(leagueName: LeagueName): Promise<Nullable<League>>;
  searchByOfficialName(leagueName: LeagueName): Promise<Nullable<League>>;
  searchById(leagueId: LeagueId): Promise<Nullable<League>>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<League[]>;
}
