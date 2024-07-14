import UserType from '../../../shared/domain/value-objects/UserType';

class LeagueFounderUserType extends UserType {
  readonly TYPE: string;

  constructor() {
    const type: string = 'LEAGUE_FOUNDER_USER';

    super(type);
    this.TYPE = type;
  }
}

export default LeagueFounderUserType;
