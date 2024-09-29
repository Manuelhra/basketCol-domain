import { FGBoxScoreTurnovers } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreTurnovers';

export class TLSFGBoxScoreTurnovers extends FGBoxScoreTurnovers {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreTurnovers {
    return new TLSFGBoxScoreTurnovers(value);
  }
}
