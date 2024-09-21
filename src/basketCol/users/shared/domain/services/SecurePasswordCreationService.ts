import { UserPassword } from '../value-objects/UserPassword';
import { IPasswordHashingService } from './IPasswordHashingService';
import { IPasswordValueObjectCreationService } from './IPasswordValueObjectCreationService';

export class SecurePasswordCreationService {
  readonly #PasswordHashingService: IPasswordHashingService;

  readonly #passwordValueObjectCreationService: IPasswordValueObjectCreationService;

  constructor(dependencies: {
    PasswordHashingService: IPasswordHashingService;
    passwordValueObjectCreationService: IPasswordValueObjectCreationService;
  }) {
    this.#PasswordHashingService = dependencies.PasswordHashingService;
    this.#passwordValueObjectCreationService = dependencies.passwordValueObjectCreationService;
  }

  public async createFromPlainText<T extends UserPassword>(userPassword: T): Promise<T> {
    const { value } = userPassword;
    const hashedPassword = await this.#PasswordHashingService.hash(value);
    return this.#passwordValueObjectCreationService.createFromHashedValue<T>(hashedPassword);
  }

  public async createFromHashedText<T extends UserPassword>(hashedText: string): Promise<T> {
    return this.#passwordValueObjectCreationService.createFromHashedValue<T>(hashedText);
  }
}
