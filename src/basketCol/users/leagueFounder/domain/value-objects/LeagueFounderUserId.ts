import UuidValueObject from '../../../../shared/domain/value-objects/UuidValueObject';

class LeagueFounderUserId extends UuidValueObject {
  constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
export default LeagueFounderUserId;
