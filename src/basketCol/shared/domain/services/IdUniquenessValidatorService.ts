import AggregateRoot from '../AggregateRoot';
import { IAggregateRoot } from '../IAggregateRoot';
import { Nullable } from '../Nullable';
import IdAlreadyExistsError from '../exceptions/IdlAlreadyExistsError';
import UuidValueObject from '../value-objects/UuidValueObject';

export interface Repository {
  searchById<T extends UuidValueObject, IES extends IAggregateRoot, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<Nullable<ES>>;
}

class IdUniquenessValidatorService {
  readonly #repository: Repository;

  constructor(dependencies: {
    repository: Repository;
  }) {
    this.#repository = dependencies.repository;
  }

  public async ensureUniqueId<T extends UuidValueObject, IES extends IAggregateRoot, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchById<T, IES, ES>(idValueObject);

    if (itemFound) {
      throw new IdAlreadyExistsError(idValueObject);
    }
  }
}

export default IdUniquenessValidatorService;
