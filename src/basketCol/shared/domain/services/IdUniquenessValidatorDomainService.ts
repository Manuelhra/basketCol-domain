import { AggregateRoot } from '../AggregateRoot';
import { IAggregateRootPrimitives } from '../IAggregateRootPrimitives';
import { Nullable } from '../Nullable';
import { IdAlreadyExistsError } from '../exceptions/IdAlreadyExistsError';
import { UuidValueObject } from '../value-objects/UuidValueObject';

type Dependencies = {
  idUniquenessValidatorDomainServiceRepository: IIdUniquenessValidatorDomainServiceRepository;
};

export interface IIdUniquenessValidatorDomainServiceRepository {
  findById<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<Nullable<ES>>;
}

export class IdUniquenessValidatorDomainService {
  readonly #idUniquenessValidatorDomainServiceRepository: IIdUniquenessValidatorDomainServiceRepository;

  private constructor(dependencies: Dependencies) {
    this.#idUniquenessValidatorDomainServiceRepository = dependencies.idUniquenessValidatorDomainServiceRepository;
  }

  public static create(dependencies: Dependencies): IdUniquenessValidatorDomainService {
    return new IdUniquenessValidatorDomainService(dependencies);
  }

  public async ensureUniqueId<T extends UuidValueObject, IES extends IAggregateRootPrimitives, ES extends AggregateRoot<IES>>(idValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#idUniquenessValidatorDomainServiceRepository.findById<T, IES, ES>(idValueObject);

    if (itemFound) {
      throw IdAlreadyExistsError.create(idValueObject);
    }
  }
}
