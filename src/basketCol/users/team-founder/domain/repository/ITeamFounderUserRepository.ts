import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserEmail } from '../value-objects/TeamFounderUserEmail';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export interface ITeamFounderUserRepository {
  save(teamFounderUser: TeamFounderUser): Promise<void>;
  findById(teamFounderUserId: TeamFounderUserId): Promise<Nullable<TeamFounderUser>>;
  findByEmail(teamFounderUserEmail: TeamFounderUserEmail): Promise<Nullable<TeamFounderUser>>;
}
