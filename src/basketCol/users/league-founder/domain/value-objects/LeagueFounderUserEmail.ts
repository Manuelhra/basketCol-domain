import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class LeagueFounderUserEmail extends UserEmail {
  private constructor(value: IUserEmailProps) {
    super(value);
  }

  public static create(value: IUserEmailProps): LeagueFounderUserEmail {
    return new LeagueFounderUserEmail(value);
  }
}
