import AggregateRoot from '../AggregateRoot';
import { Nullable } from '../Nullable';
import EmailAlreadyExistsError from '../exceptions/EmailAlreadyExistsError';
import EmailValueObject from '../value-objects/EmailValueObject';

interface Repository<T extends AggregateRoot> {
  searchByEmail<N extends EmailValueObject>(emailValueObject: N): Promise<Nullable<T>>;
}

class EmailUniquenessValidatorService<T extends AggregateRoot> {
  readonly #repository: Repository<T>;

  constructor(dependencies: { repository: Repository<T> }) {
    this.#repository = dependencies.repository;
  }

  public async ensureUniqueEmail<N extends EmailValueObject>(emailValueObject: N): Promise<void> {
    const itemFound: Nullable<T> = await this.#repository.searchByEmail<N>(emailValueObject);

    if (itemFound) {
      throw new EmailAlreadyExistsError(emailValueObject);
    }
  }
}

export default EmailUniquenessValidatorService;
