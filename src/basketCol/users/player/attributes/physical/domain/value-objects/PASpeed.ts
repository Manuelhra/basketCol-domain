import Attributes from '../../../shared/domain/value-objects/Attributes';

class PASpeed extends Attributes {
  constructor(value: number) {
    super(value, 'speed');
  }
}

export default PASpeed;
