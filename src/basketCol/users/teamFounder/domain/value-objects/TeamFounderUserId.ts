import { UserId } from '../../../shared/domain/value-objects/UserId';

export class TeamFounderUserId extends UserId {
  public constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }
}
