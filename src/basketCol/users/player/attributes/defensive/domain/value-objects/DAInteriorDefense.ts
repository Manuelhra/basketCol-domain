import Attributes from '../../../shared/domain/value-objects/Attributes';

class DAInteriorDefense extends Attributes {
  constructor(value: number) {
    super(value, 'interiorDefense');
  }
}

export default DAInteriorDefense;
