import Attribute from '../../../shared/domain/value-objects/Attribute';

class DAPerimeterDefense extends Attribute {
  constructor(value: number) {
    super(value, 'perimeterDefense');
  }
}

export default DAPerimeterDefense;
