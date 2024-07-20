import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class DASteal extends Attribute {
  constructor(value: number) {
    super(value, 'steal');
  }
}

