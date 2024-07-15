import Attributes from '../../../shared/domain/value-objects/Attributes';

class DASteal extends Attributes {
  constructor(value: number) {
    super(value, 'steal');
  }
}

export default DASteal;
