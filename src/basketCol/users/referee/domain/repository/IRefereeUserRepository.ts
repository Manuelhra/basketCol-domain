import { Nullable } from '../../../../shared/domain/Nullable';
import { RefereeUser } from '../RefereeUser';
import { RefereeUserEmail } from '../value-objects/RefereeUserEmail';
import { RefereeUserId } from '../value-objects/RefereeUserId';

export interface IRefereeUserRepository {
  save(refereeUser: RefereeUser): Promise<void>;
  findById(refereeUserId: RefereeUserId): Promise<Nullable<RefereeUser>>;
  findByEmail(refereeUserEmail: RefereeUserEmail): Promise<Nullable<RefereeUser>>;
}
