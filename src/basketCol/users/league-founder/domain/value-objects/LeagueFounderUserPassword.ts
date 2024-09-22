import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class LeagueFounderUserPassword extends UserPassword {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueFounderUserPassword {
    return new LeagueFounderUserPassword(value);
  }
}
