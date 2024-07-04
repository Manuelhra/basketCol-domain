import AggregateRoot from '../AggregateRoot';
import { Nullable } from '../Nullable';
import IdAlreadyExistsError from '../exceptions/IdlAlreadyExistsError';
import UuidValueObject from '../value-objects/UuidValueObject';

export interface Repository {
  searchById<T extends UuidValueObject, ES extends AggregateRoot>(idValueObject: T): Promise<Nullable<ES>>;
}

class IdUniquenessValidatorService {
  readonly #repository: Repository;

  constructor(depedencies: {
    repository: Repository;
  }) {
    this.#repository = depedencies.repository;
  }

  public async ensureUniqueId<T extends UuidValueObject, ES extends AggregateRoot>(idValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchById<T, ES>(idValueObject);

    if (itemFound) {
      throw new IdAlreadyExistsError(idValueObject);
    }
  }
}

export default IdUniquenessValidatorService;
