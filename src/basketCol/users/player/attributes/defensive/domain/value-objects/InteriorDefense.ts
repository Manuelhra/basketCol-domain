import Attributes from '../../../shared/domain/value-objects/Attributes';

class InteriorDefense extends Attributes {
  constructor(value: number) {
    super(value, 'interiorDefense');
  }
}

export default InteriorDefense;
