import AggregateRoot from '../AggregateRoot';
import { Nullable } from '../Nullable';
import EmailAlreadyExistsError from '../exceptions/EmailAlreadyExistsError';
import EmailValueObject from '../value-objects/EmailValueObject';

interface Repository {
  searchByEmail<N extends EmailValueObject, ES extends AggregateRoot>(emailValueObject: N): Promise<Nullable<ES>>;
}

class EmailUniquenessValidatorService {
  readonly #repository: Repository;

  constructor(dependencies: { repository: Repository }) {
    this.#repository = dependencies.repository;
  }

  public async ensureUniqueEmail<T extends EmailValueObject, ES extends AggregateRoot>(emailValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchByEmail<T, ES>(emailValueObject);

    if (itemFound) {
      throw new EmailAlreadyExistsError(emailValueObject);
    }
  }
}

export default EmailUniquenessValidatorService;
