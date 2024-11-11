import { IPaginatedResponse } from '../../../../shared/domain/IPaginatedResponse';
import { Nullable } from '../../../../shared/domain/Nullable';
import { IdListValueObject } from '../../../../shared/domain/value-objects/IdListValueObject';
import { Court } from '../Court';
import { CourtId } from '../value-objects/CourtId';

export interface ICourtRepository {
  save(court: Court): Promise<void>;
  findById(courtId: CourtId): Promise<Nullable<Court>>;
  findAllByIdList(courtIdList: IdListValueObject): Promise<Court[]>;
  searchAll(params: { query?: string; page: number; perPage: number; }): Promise<IPaginatedResponse<Court>>;
}
