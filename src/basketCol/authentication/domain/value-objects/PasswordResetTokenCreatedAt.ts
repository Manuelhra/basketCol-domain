import { CreatedAtValueObject } from '../../../shared/domain/value-objects/CreatedAtValueObject';

export class PasswordResetTokenCreatedAt extends CreatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PasswordResetTokenCreatedAt {
    return new PasswordResetTokenCreatedAt(value);
  }
}
