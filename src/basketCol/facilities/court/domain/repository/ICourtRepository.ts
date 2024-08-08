import { Nullable } from '../../../../shared/domain/Nullable';
import { ReferencedCourtIdList } from '../../../../shared/domain/value-objects/ReferencedCourtIdList';
import { Court } from '../Court';
import { CourtId } from '../value-objects/CourtId';

export interface ICourtRepository {
  searchById(courtId: CourtId): Promise<Nullable<Court>>;
  save(court: Court): Promise<void>;
  areAllCourtsExistingByIds<T extends ReferencedCourtIdList>(courtIdList: T): Promise<{ allCourtsExist: boolean, nonExistentCourtIds: CourtId[] }>;
}
