import { Attribute } from '../../../shared/domain/value-objects/Attribute';

export class PUSAFreeThrow extends Attribute {
  constructor(value: number) {
    super(value, 'freeThrow');
  }
}
