import { Nullable } from '../../../../shared/domain/Nullable';
import LeagueFounderUser from '../LeagueFounderUser';
import LeagueFounderUserId from '../value-objects/LeagueFounderUserId';

export interface LeagueFounderUserRepository {
  save(LeagueFounderUser: LeagueFounderUser): Promise<void>;
  searchById(leagueFounderUserId: LeagueFounderUserId): Promise<Nullable<LeagueFounderUser>>;
}
