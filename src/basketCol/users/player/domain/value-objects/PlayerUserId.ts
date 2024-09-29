import { UserId } from '../../../shared/domain/value-objects/UserId';

export class PlayerUserId extends UserId {
  private constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName = 'id'): PlayerUserId {
    return new PlayerUserId(value, propertyName);
  }
}
