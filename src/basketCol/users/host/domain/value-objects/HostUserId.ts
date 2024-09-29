import { UserId } from '../../../shared/domain/value-objects/UserId';

export class HostUserId extends UserId {
  private constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName = 'id'): HostUserId {
    return new HostUserId(value, propertyName);
  }
}
