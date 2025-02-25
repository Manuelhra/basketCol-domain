import { UuidValueObject } from '../../../shared/domain/value-objects/UuidValueObject';

export class PasswordResetTokenId extends UuidValueObject {
  private constructor(value: string, propertyName = 'id') {
    super(value, propertyName);
  }

  public static create(value: string, propertyName = 'id'): PasswordResetTokenId {
    return new PasswordResetTokenId(value, propertyName);
  }
}
