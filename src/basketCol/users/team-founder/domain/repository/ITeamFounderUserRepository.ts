import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserEmail } from '../value-objects/TeamFounderUserEmail';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export interface ITeamFounderUserRepository {
  searchById(teamFounderUserId: TeamFounderUserId): Promise<Nullable<TeamFounderUser>>;
  save(teamFounderUser: TeamFounderUser): Promise<void>;
  searchByEmail(teamFounderUserEmail: TeamFounderUserEmail): Promise<Nullable<TeamFounderUser>>;
}
