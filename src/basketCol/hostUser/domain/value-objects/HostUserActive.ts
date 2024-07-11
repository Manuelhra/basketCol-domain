import BooleanValueObject from '../../../shared/domain/value-objects/BooleanValueObject';

class HostUserActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'active');
  }
}

export default HostUserActive;
