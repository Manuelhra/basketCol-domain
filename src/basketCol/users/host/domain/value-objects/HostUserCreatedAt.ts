import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class HostUserCreatedAt extends UserCreatedAt {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserCreatedAt {
    return new HostUserCreatedAt(value);
  }
}
