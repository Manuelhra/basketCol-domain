import { StatsTotalFreeThrowsAttempted } from '../../../../shared/domain/value-objects/StatsTotalFreeThrowsAttempted';

export class TATStatsTotalFreeThrowsAttempted extends StatsTotalFreeThrowsAttempted {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalFreeThrowsAttempted {
    return new TATStatsTotalFreeThrowsAttempted(value);
  }
}
