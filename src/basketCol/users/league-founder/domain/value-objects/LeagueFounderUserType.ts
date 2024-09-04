import { UserType } from '../../../shared/domain/value-objects/UserType';

export class LeagueFounderUserType extends UserType {
  readonly TYPE: string;

  constructor() {
    const type: string = 'LEAGUE_FOUNDER_USER';

    super(type);
    this.TYPE = type;
  }

  public static getType(): string {
    return 'LEAGUE_FOUNDER_USER';
  }
}
