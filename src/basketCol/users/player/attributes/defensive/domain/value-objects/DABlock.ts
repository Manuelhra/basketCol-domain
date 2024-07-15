import Attributes from '../../../shared/domain/value-objects/Attributes';

class DABlock extends Attributes {
  constructor(value: number) {
    super(value, 'block');
  }
}

export default DABlock;
