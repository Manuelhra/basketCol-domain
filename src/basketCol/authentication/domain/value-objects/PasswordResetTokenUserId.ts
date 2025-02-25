import { IdValueObject } from '../../../shared/domain/value-objects/IdValueObject';

export class PasswordResetTokenUserId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'userId');
  }

  public static create(value: string): PasswordResetTokenUserId {
    return new PasswordResetTokenUserId(value);
  }
}
