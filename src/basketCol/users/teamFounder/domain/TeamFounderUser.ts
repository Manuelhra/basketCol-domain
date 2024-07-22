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

export class TeamFounderUser extends User {
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

  public toPrimitives(): ITeamFounderUser {
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
