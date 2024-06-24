import PasswordPolicyViolationError from '../exceptions/PasswordPolicyViolationError';
import { PasswordEncrypterService } from './PasswordEncrypterService';

class SecurePasswordCreationService {
  readonly #passwordEncrypterService: PasswordEncrypterService;

  readonly #regex: RegExp;

  readonly #requirements: string[];

  constructor(dependencies: {
    regex: RegExp;
    requirements: string[];
    passwordEncrypterService: PasswordEncrypterService;
  }) {
    this.#regex = dependencies.regex;
    this.#requirements = dependencies.requirements;
    this.#passwordEncrypterService = dependencies.passwordEncrypterService;
  }

  public createFromPlainText(value: string): string {
    this.ensureIsValidPassword(value);

    const encryptedPassword = this.#passwordEncrypterService.encrypt(value);
    return encryptedPassword;
  }

  private ensureIsValidPassword(password: string): void {
    if (!this.#regex.test(password)) {
      throw new PasswordPolicyViolationError(`The password does not allow the value <${password}>: ${this.#requirements}`);
    }
  }
}

export default SecurePasswordCreationService;
