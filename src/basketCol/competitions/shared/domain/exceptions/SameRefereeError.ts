import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class SameRefereeError extends RootError {
  private constructor(headRefereeId: string, assistantRefereeId: string) {
    const message = `The head referee with ID '${headRefereeId}' cannot also be the assistant referee with ID '${assistantRefereeId}'.`;
    super(message);
    this.name = 'SameRefereeError';
  }

  public static create(headRefereeId: string, assistantRefereeId: string): SameRefereeError {
    return new SameRefereeError(headRefereeId, assistantRefereeId);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
