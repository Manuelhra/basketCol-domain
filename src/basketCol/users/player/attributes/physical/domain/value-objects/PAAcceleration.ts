import Attributes from '../../../shared/domain/value-objects/Attributes';

class PAAcceleration extends Attributes {
  constructor(value: number) {
    super(value, 'acceleration');
  }
}

export default PAAcceleration;
