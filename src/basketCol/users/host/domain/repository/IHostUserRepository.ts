import { Nullable } from '../../../../shared/domain/Nullable';
import { HostUser } from '../HostUser';
import { HostUserEmail } from '../value-objects';
import { HostUserId } from '../value-objects/HostUserId';

export interface IHostUserRepository {
  save(hostUser: HostUser): Promise<void>;
  search(): Promise<Nullable<HostUser>>;
  searchById(hostUserId: HostUserId): Promise<Nullable<HostUser>>;
  searchByEmail(hostUserEmail: HostUserEmail): Promise<Nullable<HostUser>>;
}
