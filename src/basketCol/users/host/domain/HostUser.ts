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
      id: this.id.value,
      name: this.name.value,
      biography: this.biography.value,
      email: this.email.value,
      password: this.password.value,
      type: this.type.value,
      active: this.active.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
