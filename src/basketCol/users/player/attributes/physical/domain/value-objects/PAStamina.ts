import Attributes from '../../../shared/domain/value-objects/Attributes';

class PAStamina extends Attributes {
  constructor(value: number) {
    super(value, 'stamina');
  }
}

export default PAStamina;
