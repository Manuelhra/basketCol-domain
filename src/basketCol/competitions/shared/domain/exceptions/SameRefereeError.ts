import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class SameRefereeError extends RootError {
  constructor(refereeId: string) {
    const message = `The referee with ID '${refereeId}' cannot be both the head referee and the assistant referee.`;
    super(message);
    this.name = 'SameRefereeError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
