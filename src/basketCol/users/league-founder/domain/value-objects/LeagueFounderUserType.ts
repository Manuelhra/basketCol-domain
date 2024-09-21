import { UserType } from '../../../shared/domain/value-objects/UserType';

export class LeagueFounderUserType extends UserType {
  readonly TYPE: string = 'LEAGUE_FOUNDER_USER';

  constructor() {
    super(LeagueFounderUserType.value);
  }

  public static override get value(): string {
    return 'LEAGUE_FOUNDER_USER';
  }
}
