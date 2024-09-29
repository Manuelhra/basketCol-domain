import { FGBoxScoreFouls } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFouls';

export class PLSFGBoxScoreFouls extends FGBoxScoreFouls {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PLSFGBoxScoreFouls {
    return new PLSFGBoxScoreFouls(value);
  }
}
