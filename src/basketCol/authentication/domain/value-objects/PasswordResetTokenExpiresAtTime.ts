import { TimeValueObject } from '../../../shared/domain/value-objects/TimeValueObject';

export class PasswordResetTokenExpiresAtTime extends TimeValueObject {
  private constructor(value: string) {
    super(value, 'expiresAtTime');
  }

  public static create(value: string): PasswordResetTokenExpiresAtTime {
    return new PasswordResetTokenExpiresAtTime(value);
  }
}
