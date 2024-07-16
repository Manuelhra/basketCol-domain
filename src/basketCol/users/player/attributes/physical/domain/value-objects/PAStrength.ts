import Attribute from '../../../shared/domain/value-objects/Attribute';

class PAStrength extends Attribute {
  constructor(value: number) {
    super(value, 'strength');
  }
}

export default PAStrength;
