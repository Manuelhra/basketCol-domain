import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PAStrength extends Attribute {
  constructor(value: number) {
    super(value, 'strength');
  }
}

