import { IPaginatedResponse } from '../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../shared/domain/Nullable';
import { IdListValueObject } from '../../../../shared/domain/value-objects/IdListValueObject';
import { Gym } from '../Gym';
import { GymId } from '../value-objects/GymId';
import { GymOfficialName } from '../value-objects/GymOfficialName';

export interface IGymRepository {
  save(gym: Gym): Promise<void>;
  findById(gymId: GymId): Promise<Nullable<Gym>>;
  findByOfficialName(gymOfficialName: GymOfficialName): Promise<Nullable<Gym>>;
  findAllByIdList(gymIdList: IdListValueObject): Promise<Gym[]>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<Gym>>;
}
