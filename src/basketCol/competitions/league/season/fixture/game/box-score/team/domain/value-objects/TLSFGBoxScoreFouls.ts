import { FGBoxScoreFouls } from '../../../../../../../../shared/domain/value-objects/FGBoxScoreFouls';

export class TLSFGBoxScoreFouls extends FGBoxScoreFouls {
  public constructor(value: number) {
    super(value);
  }

  public static create(value: number): TLSFGBoxScoreFouls {
    return new TLSFGBoxScoreFouls(value);
  }
}
