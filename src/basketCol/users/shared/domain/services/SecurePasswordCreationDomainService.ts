import { UserPassword } from '../value-objects/UserPassword';
import { IPasswordHashingDomainService } from './IPasswordHashingDomainService';
import { IPasswordValueObjectCreationDomainService } from './IPasswordValueObjectCreationDomainService';

type Dependencies = {
  passwordHashingDomainService: IPasswordHashingDomainService;
  passwordValueObjectCreationDomainService: IPasswordValueObjectCreationDomainService;
};

export class SecurePasswordCreationDomainService {
  readonly #passwordHashingDomainService: IPasswordHashingDomainService;

  readonly #passwordValueObjectCreationDomainService: IPasswordValueObjectCreationDomainService;

  private constructor(dependencies: Dependencies) {
    this.#passwordHashingDomainService = dependencies.passwordHashingDomainService;
    this.#passwordValueObjectCreationDomainService = dependencies.passwordValueObjectCreationDomainService;
  }

  public static create(dependencies: Dependencies): SecurePasswordCreationDomainService {
    return new SecurePasswordCreationDomainService(dependencies);
  }

  public async createFromPlainText<T extends UserPassword>(userPassword: T): Promise<T> {
    const { value } = userPassword;
    const hashedPassword = await this.#passwordHashingDomainService.hash(value);
    return this.#passwordValueObjectCreationDomainService.createFromHashedValue<T>(hashedPassword);
  }

  public async createFromHashedText<T extends UserPassword>(hashedText: string): Promise<T> {
    return this.#passwordValueObjectCreationDomainService.createFromHashedValue<T>(hashedText);
  }
}
