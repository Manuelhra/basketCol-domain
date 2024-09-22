import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class TeamFounderUserPassword extends UserPassword {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserPassword {
    return new TeamFounderUserPassword(value);
  }
}
