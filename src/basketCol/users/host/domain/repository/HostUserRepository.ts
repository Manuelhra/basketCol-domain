import { Nullable } from '../../../../shared/domain/Nullable';
import { HostUser } from '../HostUser';
import { HostUserId } from '../value-objects/HostUserId';

export interface HostUserRepository {
  save(hostUser: HostUser): Promise<void>;
  search(): Promise<Nullable<HostUser>>;
  searchById(hostUserId: HostUserId): Promise<Nullable<HostUser>>;
}
