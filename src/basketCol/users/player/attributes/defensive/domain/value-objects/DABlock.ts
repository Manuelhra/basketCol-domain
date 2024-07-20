import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class DABlock extends Attribute {
  constructor(value: number) {
    super(value, 'block');
  }
}

