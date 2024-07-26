import { Nullable } from '../../../../shared/domain/Nullable';
import { Court } from '../Court';
import { CourtId } from '../value-objects/CourtId';
import { CourtIdList } from '../value-objects/CourtIdList';

export interface CourtRepository {
  searchById(courtId: CourtId): Promise<Nullable<Court>>;
  save(court: Court): Promise<void>;
  areAllCourtsExistingByIds(courtIdList: CourtIdList): Promise<{ allCourtsExist: boolean, nonExistentCourtIds: CourtId[] }>;
}
