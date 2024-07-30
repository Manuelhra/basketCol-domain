import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class SameTeamError extends RootError {
  constructor(homeTeamId: string, awayTeamId: string) {
    const message = `The home team with ID '${homeTeamId}' cannot also be the away team with ID '${awayTeamId}'.`;
    super(message);
    this.name = 'SameTeamError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
