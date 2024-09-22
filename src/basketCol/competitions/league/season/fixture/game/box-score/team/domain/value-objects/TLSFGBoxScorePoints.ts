import { FGBoxScorePoints } from '../../../../../../../../shared/domain/value-objects/FGBoxScorePoints';

export class TLSFGBoxScorePoints extends FGBoxScorePoints {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScorePoints {
    return new TLSFGBoxScorePoints(value);
  }
}
