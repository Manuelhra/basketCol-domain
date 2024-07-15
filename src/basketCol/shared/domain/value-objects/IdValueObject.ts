import UuidValueObject from './UuidValueObject';

class IdValueObject extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

export default IdValueObject;
