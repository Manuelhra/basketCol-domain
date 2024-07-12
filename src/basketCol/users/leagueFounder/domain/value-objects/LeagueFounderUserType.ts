import TypeValueObject from '../../../shared/domain/value-objects/TypeValueObject';

class LeagueFounderUserType extends TypeValueObject {
  readonly TYPE: string;

  constructor() {
    const type: string = 'LEAGUE_FOUNDER_USER';

    super(type);
    this.TYPE = type;
  }
}

export default LeagueFounderUserType;
