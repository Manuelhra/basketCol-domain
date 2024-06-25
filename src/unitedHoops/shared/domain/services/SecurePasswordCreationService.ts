import PasswordValueObject from '../value-objects/PasswordValueObject';
import { PasswordEncrypterService } from './PasswordEncrypterService';

class SecurePasswordCreationService {
  readonly #passwordEncrypterService: PasswordEncrypterService;

  constructor(dependencies: {
    passwordEncrypterService: PasswordEncrypterService;
  }) {
    this.#passwordEncrypterService = dependencies.passwordEncrypterService;
  }

  public createFromPlainText(value: string): PasswordValueObject {
    const encryptedPassword = this.#passwordEncrypterService.encrypt(value);
    return new PasswordValueObject(encryptedPassword);
  }
}

export default SecurePasswordCreationService;
