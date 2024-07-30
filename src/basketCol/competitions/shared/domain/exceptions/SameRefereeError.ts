import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class SameRefereeError extends RootError {
  constructor(headRefereeId: string, assistantRefereeId: string) {
    const message = `The head referee with ID '${headRefereeId}' cannot also be the assistant referee with ID '${assistantRefereeId}'.`;
    super(message);
    this.name = 'SameRefereeError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
