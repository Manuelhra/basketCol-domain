import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { IAggregateRootPrimitives } from '../../../../shared/domain/IAggregateRootPrimitives';
import { Nullable } from '../../../../shared/domain/Nullable';
import { EmailAlreadyExistsError } from '../exceptions/EmailAlreadyExistsError';
import { UserEmail } from '../value-objects/UserEmail';

interface IEmailUniquenessValidatorServiceRepository {
  searchByEmail<N extends UserEmail, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(emailValueObject: N): Promise<Nullable<ES>>;
}

type Dependencies = { emailUniquenessValidatorServiceRepository: IEmailUniquenessValidatorServiceRepository };

export class EmailUniquenessValidatorService {
  readonly #emailUniquenessValidatorServiceRepository: IEmailUniquenessValidatorServiceRepository;

  private constructor(dependencies: Dependencies) {
    this.#emailUniquenessValidatorServiceRepository = dependencies.emailUniquenessValidatorServiceRepository;
  }

  public static create(dependencies: Dependencies): EmailUniquenessValidatorService {
    return new EmailUniquenessValidatorService(dependencies);
  }

  public async ensureUniqueEmail<T extends UserEmail, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(emailValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#emailUniquenessValidatorServiceRepository.searchByEmail<T, IES, ES>(emailValueObject);

    if (itemFound) {
      throw EmailAlreadyExistsError.create(emailValueObject);
    }
  }
}
