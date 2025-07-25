import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class PlayerUserCreatedAt extends UserCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserCreatedAt {
    return new PlayerUserCreatedAt(value);
  }
}
