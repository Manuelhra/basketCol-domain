import { UserId } from '../../../shared/domain/value-objects/UserId';

export class LeagueFounderUserId extends UserId {
  constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }
}
