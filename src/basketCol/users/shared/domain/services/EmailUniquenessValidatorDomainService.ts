import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { IAggregateRootPrimitives } from '../../../../shared/domain/IAggregateRootPrimitives';
import { Nullable } from '../../../../shared/domain/Nullable';
import { EmailAlreadyExistsError } from '../exceptions/EmailAlreadyExistsError';
import { UserEmail } from '../value-objects/UserEmail';

export interface IEmailUniquenessValidatorDomainServiceRepository {
  findByEmail<N extends UserEmail, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(emailValueObject: N): Promise<Nullable<ES>>;
}

type Dependencies = {
  readonly emailUniquenessValidatorDomainServiceRepository: IEmailUniquenessValidatorDomainServiceRepository
};

export class EmailUniquenessValidatorDomainService {
  readonly #emailUniquenessValidatorDomainServiceRepository: IEmailUniquenessValidatorDomainServiceRepository;

  private constructor(dependencies: Dependencies) {
    this.#emailUniquenessValidatorDomainServiceRepository = dependencies.emailUniquenessValidatorDomainServiceRepository;
  }

  public static create(dependencies: Dependencies): EmailUniquenessValidatorDomainService {
    return new EmailUniquenessValidatorDomainService(dependencies);
  }

  public async ensureUniqueEmail<T extends UserEmail, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(emailValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#emailUniquenessValidatorDomainServiceRepository.findByEmail<T, IES, ES>(emailValueObject);

    if (itemFound) {
      throw EmailAlreadyExistsError.create(emailValueObject);
    }
  }
}
