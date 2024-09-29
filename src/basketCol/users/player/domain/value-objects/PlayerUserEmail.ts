import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class PlayerUserEmail extends UserEmail {
  private constructor(value: IUserEmailProps) {
    super(value);
  }

  public static create(value: IUserEmailProps): PlayerUserEmail {
    return new PlayerUserEmail(value);
  }
}
