import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class RefereeUserCreatedAt extends UserCreatedAt {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserCreatedAt {
    return new RefereeUserCreatedAt(value);
  }
}
