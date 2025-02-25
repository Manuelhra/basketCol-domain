import { StringValueObject } from '../../../shared/domain/value-objects/StringValueObject';

export class PasswordResetTokenCode extends StringValueObject {
  private constructor(value: string) {
    super(value, 'code');
  }

  public static create(value: string): PasswordResetTokenCode {
    return new PasswordResetTokenCode(value);
  }
}
