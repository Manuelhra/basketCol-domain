import { Nullable } from '../../../shared/domain/Nullable';
import League from '../League';
import LeagueName from '../value-objects/LeagueName';

export interface LeagueRepository {
  save(league: League): Promise<void>;
  searchByShortName(leagueName: LeagueName): Promise<Nullable<League>>;
  searchByOfficialName(leagueName: LeagueName): Promise<Nullable<League>>;
}
