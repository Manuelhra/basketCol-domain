import { Nullable } from '../../../shared/domain/Nullable';
import League from '../League';

export interface LeagueRepository {
  save(league: League): Promise<void>;
  searchByShortName(shortName: string): Promise<Nullable<League>>;
  searchByOfficialName(officialName: string): Promise<Nullable<League>>;
}
