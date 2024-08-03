import { Nullable } from '../../../../shared/domain/Nullable';
import { TeamFounderUser } from '../TeamFounderUser';
import { TeamFounderUserId } from '../value-objects/TeamFounderUserId';

export interface TFURepository {
  searchById(teamFounderUserId: TeamFounderUserId): Promise<Nullable<TeamFounderUser>>;
  save(teamFounderUser: TeamFounderUser): Promise<void>;
}
