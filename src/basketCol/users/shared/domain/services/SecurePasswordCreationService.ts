import { UserPassword } from '../value-objects/UserPassword';
import { IPasswordHashingService } from './IPasswordHashingService';
import { IPasswordValueObjectCreationService } from './IPasswordValueObjectCreationService';

export class SecurePasswordCreationService {
  readonly #passwordHashingService: IPasswordHashingService;

  readonly #passwordValueObjectCreationService: IPasswordValueObjectCreationService;

  constructor(dependencies: {
    passwordHashingService: IPasswordHashingService;
    passwordValueObjectCreationService: IPasswordValueObjectCreationService;
  }) {
    this.#passwordHashingService = dependencies.passwordHashingService;
    this.#passwordValueObjectCreationService = dependencies.passwordValueObjectCreationService;
  }

  public async createFromPlainText<T extends UserPassword>(userPassword: T): Promise<T> {
    const { value } = userPassword;
    const hashedPassword = await this.#passwordHashingService.hash(value);
    return this.#passwordValueObjectCreationService.createFromHashedValue<T>(hashedPassword);
  }

  public async createFromHashedText<T extends UserPassword>(hashedText: string): Promise<T> {
    return this.#passwordValueObjectCreationService.createFromHashedValue<T>(hashedText);
  }
}
