import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class TeamFounderUserPassword extends UserPassword {
  private constructor(value: string, skipValidation: boolean = false) {
    super(value, skipValidation);
  }

  public static create(value: string, skipValidation: boolean = false): TeamFounderUserPassword {
    return new TeamFounderUserPassword(value, skipValidation);
  }
}
