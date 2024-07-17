import Attribute from '../../../shared/domain/value-objects/Attribute';

class PAVertical extends Attribute {
  constructor(value: number) {
    super(value, 'vertical');
  }
}

export default PAVertical;
