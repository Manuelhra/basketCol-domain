import Attribute from '../../../shared/domain/value-objects/Attribute';

class DASteal extends Attribute {
  constructor(value: number) {
    super(value, 'steal');
  }
}

export default DASteal;
