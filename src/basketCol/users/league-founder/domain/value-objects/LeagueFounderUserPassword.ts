import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class LeagueFounderUserPassword extends UserPassword {
  private constructor(value: string, skipValidation: boolean = false) {
    super(value, skipValidation);
  }

  public static create(value: string, skipValidation: boolean = false): LeagueFounderUserPassword {
    return new LeagueFounderUserPassword(value, skipValidation);
  }
}
