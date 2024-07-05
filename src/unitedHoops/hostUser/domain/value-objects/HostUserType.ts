import TypeValueObject from '../../../shared/domain/value-objects/TypeValueObject';

class HostUserType extends TypeValueObject {
  readonly TYPE: string;

  constructor() {
    const type: string = 'HOST_USER';

    super(type);
    this.TYPE = type;
  }
}

export default HostUserType;
