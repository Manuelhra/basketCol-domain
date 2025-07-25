import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class HostUserCreatedAt extends UserCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserCreatedAt {
    return new HostUserCreatedAt(value);
  }
}
