import UuidValueObject from '../../../shared/domain/value-objects/UuidValueObject';

class HostUserId extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

export default HostUserId;
