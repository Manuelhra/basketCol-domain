import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSASpeedWithBall extends Attribute {
  private constructor(value: number) {
    super(value, 'speedWithBall');
  }

  public static create(value: number): PUSASpeedWithBall {
    return new PUSASpeedWithBall(value);
  }
}
