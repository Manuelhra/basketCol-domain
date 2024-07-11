import UuidValueObject from '../../../shared/domain/value-objects/UuidValueObject';

class LeagueId extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

export default LeagueId;
