import { User } from '../../shared/domain/User';
import { IRefereeUser } from './IRefereeUser';
import { RefereeUserActive } from './value-objects/RefereeUserActive';
import { RefereeUserBiography } from './value-objects/RefereeUserBiography';
import { RefereeUserCreatedAt } from './value-objects/RefereeUserCreatedAt';
import { RefereeUserEmail } from './value-objects/RefereeUserEmail';
import { RefereeUserId } from './value-objects/RefereeUserId';
import { RefereeUserName } from './value-objects/RefereeUserName';
import { RefereeUserPassword } from './value-objects/RefereeUserPassword';
import { RefereeUserType } from './value-objects/RefereeUserType';
import { RefereeUserUpdatedAt } from './value-objects/RefereeUserUpdatedAt';

export class RefereeUser extends User<IRefereeUser> {
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
      new RefereeUserId(id),
      new RefereeUserName(name),
      new RefereeUserBiography(biography),
      new RefereeUserEmail(email),
      new RefereeUserPassword(password),
      new RefereeUserType(),
      new RefereeUserActive(active),
      new RefereeUserCreatedAt(createdAt),
      new RefereeUserUpdatedAt(updatedAt),
    );
  }

  public toPrimitives(): IRefereeUser {
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
