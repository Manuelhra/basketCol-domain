import Attribute from '../../../shared/domain/value-objects/Attribute';

class SACloseShot extends Attribute {
  constructor(value: number) {
    super(value, 'closeShot');
  }
}

export default SACloseShot;
