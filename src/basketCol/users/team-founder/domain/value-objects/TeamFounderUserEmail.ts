import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class TeamFounderUserEmail extends UserEmail {
  private constructor(value: IUserEmailProps) {
    super(value);
  }

  public static create(value: IUserEmailProps): TeamFounderUserEmail {
    return new TeamFounderUserEmail(value);
  }
}
