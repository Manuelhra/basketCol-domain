import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAMidRangeShot extends Attribute {
  private constructor(value: number) {
    super(value, 'midRangeShot');
  }

  public static create(value: number): PUSAMidRangeShot {
    return new PUSAMidRangeShot(value);
  }
}
