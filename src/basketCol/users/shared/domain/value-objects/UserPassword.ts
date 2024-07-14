import StringValueObject from '../../../../shared/domain/value-objects/StringValueObject';
import PasswordPolicyViolationError from '../exceptions/PasswordPolicyViolationError';

abstract class UserPassword extends StringValueObject {
  static readonly #PASSWORD_REG_EXP: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  static readonly #REQUIREMENTS: string[] = [
    'At least 8 characters in length.',
    'At least one uppercase or lowercase letter.',
    'At least one numeric digit.',
    'At least one special character from [@ $!%*#?&].',
  ] as const;

  constructor(value: string) {
    super(value, 'password');

    UserPassword.ensureIsValidPassword(value);
  }

  private static ensureIsValidPassword(password: string): void {
    if (!UserPassword.#PASSWORD_REG_EXP.test(password)) {
      throw new PasswordPolicyViolationError(`The password does not allow the value <${password}>: ${UserPassword.#REQUIREMENTS.join(', ')}`);
    }
  }
}

export default UserPassword;
