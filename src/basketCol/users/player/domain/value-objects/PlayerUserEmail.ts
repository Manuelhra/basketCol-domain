import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class PlayerUserEmail extends UserEmail {
  public constructor(value: IUserEmailProps) {
    super(value);
  }
}
