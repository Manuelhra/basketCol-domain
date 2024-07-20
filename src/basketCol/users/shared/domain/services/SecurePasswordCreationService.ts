import { UserPassword } from '../value-objects/UserPassword';
import { PasswordEncrypterService } from './PasswordEncrypterService';

interface CreatePasswordValueObject {
  run<T extends UserPassword>(encryptedPassword: string): T;
}

export class SecurePasswordCreationService {
  readonly #passwordEncrypterService: PasswordEncrypterService;

  readonly #createPasswordValueObject: CreatePasswordValueObject;

  constructor(dependencies: {
    passwordEncrypterService: PasswordEncrypterService;
    createPasswordValueObject: CreatePasswordValueObject;
  }) {
    this.#passwordEncrypterService = dependencies.passwordEncrypterService;
    this.#createPasswordValueObject = dependencies.createPasswordValueObject;
  }

  public createFromPlainText<T extends UserPassword>(value: string): T {
    const encryptedPassword = this.#passwordEncrypterService.encrypt(value);
    return this.#createPasswordValueObject.run<T>(encryptedPassword);
  }
}
