import { Nullable } from '../../../../shared/domain/Nullable';
import { Gym } from '../Gym';
import { GymId } from '../value-objects/GymId';
import { GymIdList } from '../value-objects/GymIdList';
import { GymOfficialName } from '../value-objects/GymOfficialName';

export interface GymRepository {
  save(gym: Gym): Promise<void>;
  searchById(gymId: GymId): Promise<Nullable<Gym>>;
  searchByOfficialName(gymOfficialName: GymOfficialName): Promise<Nullable<Gym>>;
  areAllGymsExistingByIds(gymIdList: GymIdList): Promise<{ allGymsExist: boolean, nonExistentGymIds: GymId[] }>;
}
