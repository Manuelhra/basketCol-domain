import { UserPassword } from '../value-objects/UserPassword';
import { ICreatePasswordValueObjectService } from './ICreatePasswordValueObjectService';
import { IPasswordEncrypterService } from './IPasswordEncrypterService';

export class SecurePasswordCreationService {
  readonly #passwordEncrypterService: IPasswordEncrypterService;

  readonly #createPasswordValueObjectService: ICreatePasswordValueObjectService;

  constructor(dependencies: {
    passwordEncrypterService: IPasswordEncrypterService;
    createPasswordValueObjectService: ICreatePasswordValueObjectService;
  }) {
    this.#passwordEncrypterService = dependencies.passwordEncrypterService;
    this.#createPasswordValueObjectService = dependencies.createPasswordValueObjectService;
  }

  public createFromPlainText<T extends UserPassword>(value: string): T {
    const encryptedPassword = this.#passwordEncrypterService.encrypt(value);
    return this.#createPasswordValueObjectService.run<T>(encryptedPassword);
  }

  public createFromHashedText<T extends UserPassword>(hashedText: string): T {
    return this.#createPasswordValueObjectService.run<T>(hashedText);
  }
}
