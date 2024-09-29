import { FGBoxScoreSteals } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreSteals';

export class TLSFGBoxScoreSteals extends FGBoxScoreSteals {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreSteals {
    return new TLSFGBoxScoreSteals(value);
  }
}
