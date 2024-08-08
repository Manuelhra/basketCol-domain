import { UserPassword } from '../value-objects/UserPassword';
import { IPasswordEncrypterService } from './IPasswordEncrypterService';

interface ICreatePasswordValueObject {
  run<T extends UserPassword>(encryptedPassword: string): T;
}

export class SecurePasswordCreationService {
  readonly #passwordEncrypterService: IPasswordEncrypterService;

  readonly #createPasswordValueObject: ICreatePasswordValueObject;

  constructor(dependencies: {
    passwordEncrypterService: IPasswordEncrypterService;
    createPasswordValueObject: ICreatePasswordValueObject;
  }) {
    this.#passwordEncrypterService = dependencies.passwordEncrypterService;
    this.#createPasswordValueObject = dependencies.createPasswordValueObject;
  }

  public createFromPlainText<T extends UserPassword>(value: string): T {
    const encryptedPassword = this.#passwordEncrypterService.encrypt(value);
    return this.#createPasswordValueObject.run<T>(encryptedPassword);
  }
}
