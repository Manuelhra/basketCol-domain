import PasswordPolicyViolationError from '../exceptions/PasswordPolicyViolationError';
import StringValueObject from './StringValueObject';

abstract class PasswordValueObject extends StringValueObject {
  static readonly #PASSWORD_REG_EXP: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  static readonly #REQUIREMENTS: string[] = [
    'At least 8 characters in length.',
    'At least one uppercase or lowercase letter.',
    'At least one numeric digit.',
    'At least one special character from [@ $!%*#?&].',
  ] as const;

  constructor(value: string) {
    super(value, 'password');

    PasswordValueObject.ensureIsValidPassword(value);
  }

  private static ensureIsValidPassword(password: string): void {
    if (!PasswordValueObject.#PASSWORD_REG_EXP.test(password)) {
      throw new PasswordPolicyViolationError(`The password does not allow the value <${password}>: ${PasswordValueObject.#REQUIREMENTS.join(', ')}`);
    }
  }
}

export default PasswordValueObject;
