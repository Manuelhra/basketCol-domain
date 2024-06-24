import { Nullable } from '../Nullable';
import EmailAlreadyExistsError from '../exceptions/EmailAlreadyExistsError';
import EmailValueObject from '../value-objects/EmailValueObject';

export interface DomainEntityRepository<T> {
  searchByEmail<N extends EmailValueObject>(emailValueObject: N): Promise<Nullable<T>>;
}

class EmailUniquenessValidatorService<T> {
  readonly #domainEntityRepository: DomainEntityRepository<T>;

  constructor(dependencies: { repository: DomainEntityRepository<T> }) {
    this.#domainEntityRepository = dependencies.repository;
  }

  public async ensureUniqueEmail<N extends EmailValueObject>(emailValueObject: N): Promise<void> {
    const itemFound: Nullable<T> = await this.#domainEntityRepository.searchByEmail<N>(emailValueObject);

    if (itemFound) {
      throw new EmailAlreadyExistsError(emailValueObject);
    }
  }
}

export default EmailUniquenessValidatorService;
