import { Nullable } from '../Nullable';
import IdAlreadyExistsError from '../exceptions/IdlAlreadyExistsError';
import UuidValueObject from '../value-objects/UuidValueObject';

export interface DomainEntityRepository<T> {
  searchById<N extends UuidValueObject>(idValueObject: N): Promise<Nullable<T>>;
}

class IdUniquenessValidatorService<T> {
  readonly #domainEntityRepository: DomainEntityRepository<T>;

  constructor(depedencies: {
    domainEntityRepository: DomainEntityRepository<T>;
  }) {
    this.#domainEntityRepository = depedencies.domainEntityRepository;
  }

  public async ensureUiqueId<N extends UuidValueObject>(idValueObject: N): Promise<void> {
    const itemFound: Nullable<T> = await this.#domainEntityRepository.searchById<N>(idValueObject);

    if (itemFound) {
      throw new IdAlreadyExistsError(idValueObject);
    }
  }
}

export default IdUniquenessValidatorService;
