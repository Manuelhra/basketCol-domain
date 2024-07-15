import Attributes from '../../../shared/domain/value-objects/Attributes';

class FAPostControl extends Attributes {
  constructor(value: number) {
    super(value, 'postControl');
  }
}

export default FAPostControl;
