import { BooleanValueObject } from '../../../shared/domain/value-objects/BooleanValueObject';

export class PasswordResetTokenIsUsed extends BooleanValueObject {
  private constructor(value: boolean) {
    super(value, 'isUsed');
  }

  public static create(value: boolean): PasswordResetTokenIsUsed {
    return new PasswordResetTokenIsUsed(value);
  }
}
