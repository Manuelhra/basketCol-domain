import User from '../../shared/domain/User';
import { IPlayerUser } from './IPlayerUser';
import PlayerUserActive from './value-objects/PlayerUserActive';
import PlayerUserEmail from './value-objects/PlayerUserEmail';
import PlayerUserId from './value-objects/PlayerUserId';
import PlayerUserPassword from './value-objects/PlayerUserPassword';
import PlayerUserType from './value-objects/PlayerUserType';

class PlayerUser extends User {
  constructor(
    id: string,
    email: { value: string; verified: boolean },
    password: string,
    active: boolean,
  ) {
    super(
      new PlayerUserId(id),
      new PlayerUserEmail(email),
      new PlayerUserPassword(password),
      new PlayerUserType(),
      new PlayerUserActive(active),
    );
  }

  public toPrimitives(): IPlayerUser {
    return {
      id: this.id.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      type: this.type.getValue(),
      active: this.active.getValue(),
    };
  }
}
export default PlayerUser;
