import { UserType } from '../../../shared/domain/value-objects/UserType';

export class LeagueFounderUserType extends UserType {
  protected static override readonly TYPE: string = 'LEAGUE_FOUNDER_USER';

  private constructor() {
    super(LeagueFounderUserType.TYPE);
  }

  public static create(): LeagueFounderUserType {
    return new LeagueFounderUserType();
  }

  public static override get value(): string {
    return LeagueFounderUserType.TYPE;
  }
}
