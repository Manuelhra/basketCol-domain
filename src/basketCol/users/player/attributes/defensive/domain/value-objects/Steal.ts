import Attributes from '../../../shared/domain/value-objects/Attributes';

class Steal extends Attributes {
  constructor(value: number) {
    super(value, 'steal');
  }
}

export default Steal;
