import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidTeamPlayerStatusError extends RootError {
  private constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid team player status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidTeamPlayerStatusError';
  }

  public static create(invalidStatus: string, validStatuses: readonly string[]): InvalidTeamPlayerStatusError {
    return new InvalidTeamPlayerStatusError(invalidStatus, validStatuses);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
