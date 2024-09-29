import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class HostUserUpdatedAt extends UserUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserUpdatedAt {
    return new HostUserUpdatedAt(value);
  }
}
