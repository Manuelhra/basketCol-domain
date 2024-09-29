import { AggregateRoot } from '../AggregateRoot';
import { IAggregateRootPrimitives } from '../IAggregateRootPrimitives';
import { Nullable } from '../Nullable';
import { IdAlreadyExistsError } from '../exceptions/IdAlreadyExistsError';
import { UuidValueObject } from '../value-objects/UuidValueObject';

export interface IRepository {
  searchById<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<Nullable<ES>>;
}

export class IdUniquenessValidatorService {
  readonly #repository: IRepository;

  constructor(dependencies: {
    repository: IRepository;
  }) {
    this.#repository = dependencies.repository;
  }

  public async ensureUniqueId<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchById<T, IES, ES>(idValueObject);

    if (itemFound) {
      throw new IdAlreadyExistsError(idValueObject);
    }
  }
}
