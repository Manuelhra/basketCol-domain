import User from '../../shared/domain/User';
import { PlainHostUserData } from './PlainHostUserData';
import HostUserActive from './value-objects/HostUserActive';
import HostUserEmail from './value-objects/HostUserEmail';
import HostUserId from './value-objects/HostUserId';
import HostUserPassword from './value-objects/HostUserPassword';

class HostUser extends User {
  constructor(
    id: string,
    email: { value: string; verified: boolean },
    password: string,
    active: boolean,
  ) {
    super(
      new HostUserId(id),
      new HostUserEmail(email),
      new HostUserPassword(password, 'HostUserPassword'),
      new HostUserActive(active, 'HostUserActive'),
    );
  }

  public toPrimitives(): PlainHostUserData {
    return {
      id: this.id.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      active: this.active.getValue(),
    };
  }
}

export default HostUser;
