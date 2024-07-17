import Attribute from '../../../shared/domain/value-objects/Attribute';

class DABlock extends Attribute {
  constructor(value: number) {
    super(value, 'block');
  }
}

export default DABlock;
