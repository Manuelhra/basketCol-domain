import { User } from '../../shared/domain/User';
import { IHostUser } from './IHostUser';
import { HostUserActive } from './value-objects/HostUserActive';
import { HostUserBiography } from './value-objects/HostUserBiography';
import { HostUserCreatedAt } from './value-objects/HostUserCreatedAt';
import { HostUserEmail } from './value-objects/HostUserEmail';
import { HostUserId } from './value-objects/HostUserId';
import { HostUserName } from './value-objects/HostUserName';
import { HostUserPassword } from './value-objects/HostUserPassword';
import { HostUserType } from './value-objects/HostUserType';
import { HostUserUpdatedAt } from './value-objects/HostUserUpdatedAt';

export class HostUser extends User<IHostUser> {
  constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean },
    password: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new HostUserId(id),
      new HostUserName(name),
      new HostUserBiography(biography),
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
      name: this.name.getValue(),
      biography: this.biography.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
      type: this.type.getValue(),
      active: this.active.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}
