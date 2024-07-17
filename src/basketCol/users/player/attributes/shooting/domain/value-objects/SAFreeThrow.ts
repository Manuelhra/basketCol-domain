import Attribute from '../../../shared/domain/value-objects/Attribute';

class SAFreeThrow extends Attribute {
  constructor(value: number) {
    super(value, 'freeThrow');
  }
}

export default SAFreeThrow;
