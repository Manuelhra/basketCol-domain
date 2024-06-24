import EmailValueObject from '../../../shared/domain/value-objects/EmailValueObject';

class LeagueFounderUserEmail extends EmailValueObject {
  constructor(value: { value: string; verified: boolean; }) {
    super(value, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }
}

export default LeagueFounderUserEmail;
