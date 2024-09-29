import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { CourtId } from '../value-objects/CourtId';

export class CourtsNotFoundError extends RootError {
  private constructor(nonExistentCourtIds: CourtId[]) {
    super(`Courts not found: The following courts with IDs '${nonExistentCourtIds.map((id) => id.value).join(', ')}' do not exist in the system.`);

    this.name = 'CourtsNotFoundError';
  }

  public static create(nonExistentCourtIds: CourtId[]): CourtsNotFoundError {
    return new CourtsNotFoundError(nonExistentCourtIds);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
