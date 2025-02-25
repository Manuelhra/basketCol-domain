import { UpdatedAtValueObject } from '../../../shared/domain/value-objects/UpdatedAtValueObject';

export class PasswordResetTokenUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PasswordResetTokenUpdatedAt {
    return new PasswordResetTokenUpdatedAt(value);
  }
}
