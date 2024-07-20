import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class SAFreeThrow extends Attribute {
  constructor(value: number) {
    super(value, 'freeThrow');
  }
}

