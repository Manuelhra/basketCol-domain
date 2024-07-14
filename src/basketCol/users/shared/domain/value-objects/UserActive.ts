import BooleanValueObject from '../../../../shared/domain/value-objects/BooleanValueObject';

class UserActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'active');
  }
}

export default UserActive;
