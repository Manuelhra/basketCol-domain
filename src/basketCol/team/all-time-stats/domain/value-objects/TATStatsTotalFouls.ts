import { StatsTotalFouls } from '../../../../shared/domain/value-objects/StatsTotalFouls';

export class TATStatsTotalFouls extends StatsTotalFouls {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalFouls {
    return new TATStatsTotalFouls(value);
  }
}
