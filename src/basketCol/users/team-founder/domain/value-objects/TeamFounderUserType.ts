import { UserType } from '../../../shared/domain/value-objects/UserType';

export class TeamFounderUserType extends UserType {
  readonly TYPE: string = 'TEAM_FOUNDER_USER';

  constructor() {
    super(TeamFounderUserType.value);
  }

  public static override get value(): string {
    return 'TEAM_FOUNDER_USER';
  }
}
