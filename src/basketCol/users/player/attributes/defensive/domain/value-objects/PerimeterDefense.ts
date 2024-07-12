import Attributes from '../../../shared/domain/value-objects/Attributes';

class PerimeterDefense extends Attributes {
  constructor(value: number) {
    super(value, 'perimeterDefense');
  }
}

export default PerimeterDefense;
