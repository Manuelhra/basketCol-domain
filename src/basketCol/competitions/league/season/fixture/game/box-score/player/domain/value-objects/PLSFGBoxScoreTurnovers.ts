import { FGBoxScoreTurnovers } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreTurnovers';

export class PLSFGBoxScoreTurnovers extends FGBoxScoreTurnovers {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreTurnovers {
    return new PLSFGBoxScoreTurnovers(value);
  }
}
