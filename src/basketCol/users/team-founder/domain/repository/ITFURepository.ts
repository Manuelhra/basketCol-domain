import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';
import { TFUEmail } from '../value-objects/TFUEmail';

export interface ITFURepository {
  searchById(teamFounderUserId: TeamFounderUserId): Promise<Nullable<TeamFounderUser>>;
  save(teamFounderUser: TeamFounderUser): Promise<void>;
  searchByEmail(teamFounderUserEmail: TFUEmail): Promise<Nullable<TeamFounderUser>>;
}
