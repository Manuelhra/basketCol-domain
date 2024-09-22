import { StatsTotalFreeThrowsAttempted } from '../../../../../shared/domain/value-objects/StatsTotalFreeThrowsAttempted';

export class PUCStatsTotalFreeThrowsAttempted extends StatsTotalFreeThrowsAttempted {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalFreeThrowsAttempted {
    return new PUCStatsTotalFreeThrowsAttempted(value);
  }
}
