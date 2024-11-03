import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSAThreePointShot extends SubAttribute {
  private constructor(value: number) {
    super(value, 'threePointShot');
  }

  public static create(value: number): PUSAThreePointShot {
    return new PUSAThreePointShot(value);
  }
}
