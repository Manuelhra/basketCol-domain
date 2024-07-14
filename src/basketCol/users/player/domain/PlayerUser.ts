import User from '../../shared/domain/User';
import { IPlayerUser } from './IPlayerUser';
import PlayerUserActive from './value-objects/PlayerUserActive';
import PlayerUserCreatedAt from './value-objects/PlayerUserCreatedAt';
import PlayerUserEmail from './value-objects/PlayerUserEmail';
import PlayerUserId from './value-objects/PlayerUserId';
import PlayerUserPassword from './value-objects/PlayerUserPassword';
import PlayerUserType from './value-objects/PlayerUserType';
import PlayerUserUpdatedAt from './value-objects/PlayerUserUpdatedAt';

class PlayerUser extends User {
  constructor(
    id: string,
    email: { value: string; verified: boolean },
    password: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new PlayerUserId(id),
      new PlayerUserEmail(email),
      new PlayerUserPassword(password),
      new PlayerUserType(),
      new PlayerUserActive(active),
      new PlayerUserCreatedAt(createdAt),
      new PlayerUserUpdatedAt(updatedAt),
    );
  }

  public toPrimitives(): IPlayerUser {
    return {
      id: this.id.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      type: this.type.getValue(),
      active: this.active.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}
export default PlayerUser;
