import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSASpeedWithBall extends SubAttribute {
  private constructor(value: number) {
    super(value, 'speedWithBall');
  }

  public static create(value: number): PUSASpeedWithBall {
    return new PUSASpeedWithBall(value);
  }
}
