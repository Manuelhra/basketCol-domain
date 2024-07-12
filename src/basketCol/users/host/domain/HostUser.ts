import User from '../../shared/domain/User';
import { IHostUser } from './IHostUser';
import HostUserActive from './value-objects/HostUserActive';
import HostUserEmail from './value-objects/HostUserEmail';
import HostUserId from './value-objects/HostUserId';
import HostUserPassword from './value-objects/HostUserPassword';
import HostUserType from './value-objects/HostUserType';

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
      new HostUserPassword(password),
      new HostUserType(),
      new HostUserActive(active),
    );
  }

  public toPrimitives(): IHostUser {
    return {
      id: this.id.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      type: this.type.getValue(),
      active: this.active.getValue(),
    };
  }
}

export default HostUser;
