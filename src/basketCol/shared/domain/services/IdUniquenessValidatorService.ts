import { AggregateRoot } from '../AggregateRoot';
import { IAggregateRootPrimitives } from '../IAggregateRootPrimitives';
import { Nullable } from '../Nullable';
import { IdAlreadyExistsError } from '../exceptions/IdAlreadyExistsError';
import { UuidValueObject } from '../value-objects/UuidValueObject';

type Dependencies = {
  idUniquenessValidatorServiceRepository: IIdUniquenessValidatorServiceRepository;
};

export interface IIdUniquenessValidatorServiceRepository {
  findById<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<Nullable<ES>>;
}

export class IdUniquenessValidatorService {
  readonly #idUniquenessValidatorServiceRepository: IIdUniquenessValidatorServiceRepository;

  private constructor(dependencies: Dependencies) {
    this.#idUniquenessValidatorServiceRepository = dependencies.idUniquenessValidatorServiceRepository;
  }

  public static create(dependencies: Dependencies): IdUniquenessValidatorService {
    return new IdUniquenessValidatorService(dependencies);
  }

  public async ensureUniqueId<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#idUniquenessValidatorServiceRepository.findById<T, IES, ES>(idValueObject);

    if (itemFound) {
      throw IdAlreadyExistsError.create(idValueObject);
    }
  }
}
