import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSASpeedWithBall extends Attribute {
  constructor(value: number) {
    super(value, 'speedWithBall');
  }
}
