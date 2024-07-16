import Attribute from '../../../shared/domain/value-objects/Attribute';

class FAPostControl extends Attribute {
  constructor(value: number) {
    super(value, 'postControl');
  }
}

export default FAPostControl;
