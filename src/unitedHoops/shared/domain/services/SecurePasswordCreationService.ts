import PasswordValueObject from '../value-objects/PasswordValueObject';
import { PasswordEncrypterService } from './PasswordEncrypterService';

interface CreatePasswordValueObject {
  run<T extends PasswordValueObject>(encryptedPassword: string): T;
}

class SecurePasswordCreationService {
  readonly #passwordEncrypterService: PasswordEncrypterService;

  readonly #createPasswordValueObject: CreatePasswordValueObject;

  constructor(dependencies: {
    passwordEncrypterService: PasswordEncrypterService;
    createPasswordValueObject: CreatePasswordValueObject;
  }) {
    this.#passwordEncrypterService = dependencies.passwordEncrypterService;
    this.#createPasswordValueObject = dependencies.createPasswordValueObject;
  }

  public createFromPlainText<T extends PasswordValueObject>(value: string): T {
    const encryptedPassword = this.#passwordEncrypterService.encrypt(value);
    return this.#createPasswordValueObject.run<T>(encryptedPassword);
  }
}

export default SecurePasswordCreationService;
