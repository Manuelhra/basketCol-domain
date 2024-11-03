import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSAMidRangeShot extends SubAttribute {
  private constructor(value: number) {
    super(value, 'midRangeShot');
  }

  public static create(value: number): PUSAMidRangeShot {
    return new PUSAMidRangeShot(value);
  }
}
