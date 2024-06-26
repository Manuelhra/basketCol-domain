import BooleanValueObject from '../../../shared/domain/value-objects/BooleanValueObject';

class LeagueSeasonStatus extends BooleanValueObject {
  static readonly #VALID_STATUSES: string[] = ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED', 'POSTPONED', 'SUSPENDED', 'RESCHEDULED'];

  constructor(value: boolean) {
    super(value, 'status');
  }
}

export default LeagueSeasonStatus;
