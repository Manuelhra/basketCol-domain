import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { CourtId } from '../value-objects/CourtId';

export class CourtNotFoundError extends RootError {
  constructor(courtId: CourtId) {
    super(`Court not found: The court with ID '${courtId.value}' does not exist in the system.`);

    this.name = 'CourtNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
