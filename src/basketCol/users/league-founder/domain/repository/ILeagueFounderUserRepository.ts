import { Nullable } from '../../../../shared/domain/Nullable';
import { LeagueFounderUser } from '../LeagueFounderUser';
import { LeagueFounderUserEmail } from '../value-objects/LeagueFounderUserEmail';
import { LeagueFounderUserId } from '../value-objects/LeagueFounderUserId';

export interface ILeagueFounderUserRepository {
  save(LeagueFounderUser: LeagueFounderUser): Promise<void>;
  searchById(leagueFounderUserId: LeagueFounderUserId): Promise<Nullable<LeagueFounderUser>>;
  searchByEmail(leagueFounderUserEmail: LeagueFounderUserEmail): Promise<Nullable<LeagueFounderUser>>;
}
