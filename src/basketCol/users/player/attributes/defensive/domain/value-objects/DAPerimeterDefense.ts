import Attributes from '../../../shared/domain/value-objects/Attributes';

class DAPerimeterDefense extends Attributes {
  constructor(value: number) {
    super(value, 'perimeterDefense');
  }
}

export default DAPerimeterDefense;
