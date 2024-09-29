import { AggregateRoot } from '../AggregateRoot';
import { IAggregateRootPrimitives } from '../IAggregateRootPrimitives';
import { Nullable } from '../Nullable';
import { IdAlreadyExistsError } from '../exceptions/IdAlreadyExistsError';
import { UuidValueObject } from '../value-objects/UuidValueObject';

type Dependencies = {
  repository: IRepository;
};

export interface IRepository {
  searchById<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<Nullable<ES>>;
}

export class IdUniquenessValidatorService {
  readonly #repository: IRepository;

  private constructor(dependencies: Dependencies) {
    this.#repository = dependencies.repository;
  }

  public static create(dependencies: Dependencies): IdUniquenessValidatorService {
    return new IdUniquenessValidatorService(dependencies);
  }

  public async ensureUniqueId<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchById<T, IES, ES>(idValueObject);

    if (itemFound) {
      throw IdAlreadyExistsError.create(idValueObject);
    }
  }
}
