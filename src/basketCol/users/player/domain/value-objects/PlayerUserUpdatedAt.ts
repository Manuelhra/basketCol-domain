import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class PlayerUserUpdatedAt extends UserUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserUpdatedAt {
    return new PlayerUserUpdatedAt(value);
  }
}
