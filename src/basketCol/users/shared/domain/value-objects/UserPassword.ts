import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { PasswordPolicyViolationError } from '../exceptions/PasswordPolicyViolationError';

export class UserPassword extends StringValueObject {
  static readonly #PASSWORD_REG_EXP: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  static readonly #REQUIREMENTS: string[] = [
    'At least 8 characters in length.',
    'At least one uppercase or lowercase letter.',
    'At least one numeric digit.',
    'At least one special character from [@ $!%*#?&].',
  ] as const;

  protected constructor(value: string, skipValidation: boolean = false) {
    super(value, 'password');

    if (skipValidation === false) {
      UserPassword.ensureIsValidPassword(value);
    }
  }

  public static create(value: string, skipValidation: boolean = false): UserPassword {
    return new UserPassword(value, skipValidation);
  }

  public static get passwordRegExp(): RegExp {
    return UserPassword.#PASSWORD_REG_EXP;
  }

  public static get requirements(): string[] {
    return UserPassword.#REQUIREMENTS;
  }

  public static getRequirementsAsString(): string {
    return UserPassword.#REQUIREMENTS.join(', ');
  }

  private static ensureIsValidPassword(password: string): void {
    if (UserPassword.#PASSWORD_REG_EXP.test(password) === false) {
      throw PasswordPolicyViolationError.create(`The password does not allow the value <${password}>: ${UserPassword.#REQUIREMENTS.join(', ')}`);
    }
  }
}
