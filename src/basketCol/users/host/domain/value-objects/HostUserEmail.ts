import { IUserEmailProps, UserEmail } from '../../../shared/domain/value-objects/UserEmail';

export class HostUserEmail extends UserEmail {
  public constructor(value: IUserEmailProps) {
    super(value);
  }

  public static create(value: IUserEmailProps): HostUserEmail {
    return new HostUserEmail(value);
  }
}
