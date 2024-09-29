import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class RefereeUserEmail extends UserEmail {
  private constructor(value: IUserEmailProps) {
    super(value);
  }

  public static create(value: IUserEmailProps): RefereeUserEmail {
    return new RefereeUserEmail(value);
  }
}
