import { Nullable } from '../../../../shared/domain/Nullable';
import HostUser from '../HostUser';

export interface HostUserRepository {
  save(hostUser: HostUser): Promise<void>;
  search(): Promise<Nullable<HostUser>>;
}
