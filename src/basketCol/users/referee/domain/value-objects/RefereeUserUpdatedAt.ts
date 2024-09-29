import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class RefereeUserUpdatedAt extends UserUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserUpdatedAt {
    return new RefereeUserUpdatedAt(value);
  }
}
