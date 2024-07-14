import UuidValueObject from '../../../../shared/domain/value-objects/UuidValueObject';

abstract class UserId extends UuidValueObject {
  constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }
}

export default UserId;
