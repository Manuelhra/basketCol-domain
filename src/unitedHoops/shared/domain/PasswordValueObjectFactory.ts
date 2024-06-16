import InvalidPasswordError from './exceptions/InvalidPasswordEorr';
import { PasswordEncrypter } from './services/PasswordEncrypter';

abstract class PasswordValueObjectFactory {
  readonly #passwordEncrypter: PasswordEncrypter;

  protected readonly abstract regex: RegExp;

  protected readonly abstract requirements: string[];

  constructor(dependencies: {
    passwordEncrypter: PasswordEncrypter;
  }) {
    this.#passwordEncrypter = dependencies.passwordEncrypter;
  }

  public createFromPlainText(value: string): string {
    this.ensureIsValidPassword(value);

    const encryptedPassword = this.#passwordEncrypter.encrypt(value);
    return encryptedPassword;
  }

  public createFromHashedText(hashedText: string): string {
    return hashedText;
  }

  private ensureIsValidPassword(password: string): void {
    if (!this.regex.test(password)) {
      throw new InvalidPasswordError(`<${this.constructor.name}> does not allow the value <${password}>: ${this.requirements}`);
    }
  }
}

export default PasswordValueObjectFactory;
