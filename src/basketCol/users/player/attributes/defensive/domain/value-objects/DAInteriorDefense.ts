import Attribute from '../../../shared/domain/value-objects/Attribute';

class DAInteriorDefense extends Attribute {
  constructor(value: number) {
    super(value, 'interiorDefense');
  }
}

export default DAInteriorDefense;
