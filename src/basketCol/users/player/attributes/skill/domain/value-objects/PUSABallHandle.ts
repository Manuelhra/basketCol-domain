import { SubAttribute } from '../../../shared/domain/value-objects/SubAttribute';

export class PUSABallHandle extends SubAttribute {
  private constructor(value: number) {
    super(value, 'ballHandle');
  }

  public static create(value: number): PUSABallHandle {
    return new PUSABallHandle(value);
  }
}
