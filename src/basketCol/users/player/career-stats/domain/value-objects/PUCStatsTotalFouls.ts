import { StatsTotalFouls } from '../../../../../shared/domain/value-objects/StatsTotalFouls';

export class PUCStatsTotalFouls extends StatsTotalFouls {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalFouls {
    return new PUCStatsTotalFouls(value);
  }
}
