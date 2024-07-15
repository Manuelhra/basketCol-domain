import Attributes from '../../../shared/domain/value-objects/Attributes';

class PAStrength extends Attributes {
  constructor(value: number) {
    super(value, 'strength');
  }
}

export default PAStrength;
