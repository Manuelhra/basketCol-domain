import UuidValueObject from '../../../shared/domain/value-objects/UuidValueObject';

class LeagueFounderUserId extends UuidValueObject {
  constructor(value: string) {
    super(value, 'founderUserId');
  }
}

export default LeagueFounderUserId;
