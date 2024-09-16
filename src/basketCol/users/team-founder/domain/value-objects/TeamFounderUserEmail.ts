import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class TeamFounderUserEmail extends UserEmail {
  public constructor(value: IUserEmailProps) {
    super(value);
  }
}
