import { Nullable } from '../../../../shared/domain/Nullable';
import { ReferencedGymIdList } from '../../../../shared/domain/value-objects/ReferencedGymIdList';
import { Gym } from '../Gym';
import { GymId } from '../value-objects/GymId';
import { GymOfficialName } from '../value-objects/GymOfficialName';

export interface IGymRepository {
  save(gym: Gym): Promise<void>;
  searchById(gymId: GymId): Promise<Nullable<Gym>>;
  searchByOfficialName(gymOfficialName: GymOfficialName): Promise<Nullable<Gym>>;
  areAllGymsExistingByIds<T extends ReferencedGymIdList>(gymIdList: T): Promise<{ allGymsExist: boolean, nonExistentGymIds: GymId[] }>;
}
