import { DateValueObject } from '../../../shared/domain/value-objects/DateValueObject';

export class PasswordResetTokenExpiresAtDate extends DateValueObject {
  private constructor(value: string) {
    super(value, 'expiresAtDate');
  }

  public static create(value: string): PasswordResetTokenExpiresAtDate {
    return new PasswordResetTokenExpiresAtDate(value);
  }
}
