import { UserId } from '../../../shared/domain/value-objects/UserId';

export class LeagueFounderUserId extends UserId {
  private constructor(value: string, propertyName: string = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName: string = 'id'): LeagueFounderUserId {
    return new LeagueFounderUserId(value, propertyName);
  }
}
