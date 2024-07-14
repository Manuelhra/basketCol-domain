import UserId from '../../../shared/domain/value-objects/UserId';

class LeagueFounderUserId extends UserId {
  constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
export default LeagueFounderUserId;
