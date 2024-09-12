import { User } from '../../shared/domain/User';
import { ITeamFounderUser } from './ITeamFounderUser';
import { TeamFounderUserId } from './value-objects/TeamFounderUserId';
import { TFUActive } from './value-objects/TFUActive';
import { TFUBiography } from './value-objects/TFUBiography';
import { TFUCreatedAt } from './value-objects/TFUCreatedAt';
import { TFUEmail } from './value-objects/TFUEmail';
import { TFUName } from './value-objects/TFUName';
import { TFUPassword } from './value-objects/TFUPassword';
import { TFUType } from './value-objects/TFUType';
import { TFUUpdatedAt } from './value-objects/TFUUpdatedAt';

export class TeamFounderUser extends User<ITeamFounderUser> {
  constructor(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean; },
    password: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    super(
      new TeamFounderUserId(id),
      new TFUName(name),
      new TFUBiography(biography),
      new TFUEmail(email),
      new TFUPassword(password),
      new TFUType(),
      new TFUActive(active),
      new TFUCreatedAt(createdAt),
      new TFUUpdatedAt(updatedAt),
    );
  }

  public override toPrimitives(): ITeamFounderUser {
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

  public static override create(
    id: string,
    name: { firstName: string; lastName: string; },
    biography: string,
    email: { value: string; verified: boolean; },
    password: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
  ): TeamFounderUser {
    return new TeamFounderUser(
      id,
      name,
      biography,
      email,
      password,
      active,
      createdAt,
      updatedAt,
    );
  }
}
