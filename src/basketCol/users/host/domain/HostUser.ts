import { User } from '../../shared/domain/User';
import { IHostUser } from './IHostUser';
import  { HostUserActive }  from './value-objects/HostUserActive';
import { HostUserCreatedAt } from './value-objects/HostUserCreatedAt';
import { HostUserEmail } from './value-objects/HostUserEmail';
import { HostUserId } from './value-objects/HostUserId';
import { HostUserPassword } from './value-objects/HostUserPassword';
import { HostUserType } from './value-objects/HostUserType';
import { HostUserUpdatedAt } from './value-objects/HostUserUpdatedAt';

export class HostUser extends User {
  constructor(
    id: string,
    email: { value: string; verified: boolean },
    password: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new HostUserId(id),
      new HostUserEmail(email),
      new HostUserPassword(password),
      new HostUserType(),
      new HostUserActive(active),
      new HostUserCreatedAt(createdAt),
      new HostUserUpdatedAt(updatedAt),
    );
  }

  public toPrimitives(): IHostUser {
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

