import { UserType } from '../../../shared/domain/value-objects/UserType';

export class TeamFounderUserType extends UserType {
  protected static override readonly TYPE: string = 'TEAM_FOUNDER_USER';

  constructor() {
    super(TeamFounderUserType.TYPE);
  }

  public static override get value(): string {
    return TeamFounderUserType.TYPE;
  }
}
