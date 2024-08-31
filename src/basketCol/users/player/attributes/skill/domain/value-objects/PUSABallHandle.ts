import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSABallHandle extends Attribute {
  constructor(value: number) {
    super(value, 'ballHandle');
  }
}
