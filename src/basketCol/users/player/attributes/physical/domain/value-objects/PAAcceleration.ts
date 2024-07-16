import Attribute from '../../../shared/domain/value-objects/Attribute';

class PAAcceleration extends Attribute {
  constructor(value: number) {
    super(value, 'acceleration');
  }
}

export default PAAcceleration;
