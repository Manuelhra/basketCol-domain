import { UserId } from '../../../shared/domain/value-objects/UserId';

export class TeamFounderUserId extends UserId {
  public constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName = 'id'): TeamFounderUserId {
    return new TeamFounderUserId(value, propertyName);
  }
}
