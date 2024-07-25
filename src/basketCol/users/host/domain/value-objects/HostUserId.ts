import { UserId } from '../../../shared/domain/value-objects/UserId';

export class HostUserId extends UserId {
  public constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }
}
