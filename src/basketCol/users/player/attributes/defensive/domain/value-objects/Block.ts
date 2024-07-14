import Attributes from '../../../shared/domain/value-objects/Attributes';

class Block extends Attributes {
  constructor(value: number) {
    super(value, 'block');
  }
}

export default Block;
