import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSABallHandle extends Attribute {
  constructor(value: number) {
    super(value, 'ballHandle');
  }

  public static create(value: number): PUSABallHandle {
    return new PUSABallHandle(value);
  }
}
