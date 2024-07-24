import { Nullable } from '../../../../shared/domain/Nullable';
import { RefereeUser } from '../RefereeUser';
import { RefereeUserId } from '../value-objects/RefereeUserId';

export interface RefereeUserRepository {
  searchById(refereeUserId: RefereeUserId): Promise<Nullable<RefereeUser>>;
  save(refereeUser: RefereeUser): Promise<void>;
}
