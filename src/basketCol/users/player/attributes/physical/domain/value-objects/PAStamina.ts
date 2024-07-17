import Attribute from '../../../shared/domain/value-objects/Attribute';

class PAStamina extends Attribute {
  constructor(value: number) {
    super(value, 'stamina');
  }
}

export default PAStamina;
