import UuidValueObject from '../../../shared/domain/value-objects/UuidValueObject';

class LeagueSeasonId extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

export default LeagueSeasonId;
