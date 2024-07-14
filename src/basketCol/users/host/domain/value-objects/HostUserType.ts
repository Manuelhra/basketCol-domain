import UserType from '../../../shared/domain/value-objects/UserType';

class HostUserType extends UserType {
  readonly TYPE: string;

  constructor() {
    const type: string = 'HOST_USER';

    super(type);
    this.TYPE = type;
  }
}

export default HostUserType;
