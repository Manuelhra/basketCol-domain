import { FGBoxScoreSteals } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreSteals';

export class TLSFGBoxScoreSteals extends FGBoxScoreSteals {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreSteals {
    return new TLSFGBoxScoreSteals(value);
  }
}
