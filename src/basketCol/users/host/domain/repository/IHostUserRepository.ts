import { Nullable } from '../../../../shared/domain/Nullable';
import { HostUser } from '../HostUser';
import { HostUserEmail } from '../value-objects';
import { HostUserId } from '../value-objects/HostUserId';

export interface IHostUserRepository {
  save(hostUser: HostUser): Promise<void>;
  find(): Promise<Nullable<HostUser>>;
  findById(hostUserId: HostUserId): Promise<Nullable<HostUser>>;
  findByEmail(hostUserEmail: HostUserEmail): Promise<Nullable<HostUser>>;
}
