import Attribute from '../../../shared/domain/value-objects/Attribute';

class PASpeed extends Attribute {
  constructor(value: number) {
    super(value, 'speed');
  }
}

export default PASpeed;
