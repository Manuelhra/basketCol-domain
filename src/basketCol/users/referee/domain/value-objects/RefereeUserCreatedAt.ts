import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class RefereeUserCreatedAt extends UserCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserCreatedAt {
    return new RefereeUserCreatedAt(value);
  }
}
