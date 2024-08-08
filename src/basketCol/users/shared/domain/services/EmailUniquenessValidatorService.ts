import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { IAggregateRoot } from '../../../../shared/domain/IAggregateRoot';
import { Nullable } from '../../../../shared/domain/Nullable';
import { EmailAlreadyExistsError } from '../exceptions/EmailAlreadyExistsError';
import { UserEmail } from '../value-objects/UserEmail';

interface IRepository {
  searchByEmail<N extends UserEmail, IES extends IAggregateRoot, ES extends AggregateRoot<IES>>(emailValueObject: N): Promise<Nullable<ES>>;
}

export class EmailUniquenessValidatorService {
  readonly #repository: IRepository;

  constructor(dependencies: { repository: IRepository }) {
    this.#repository = dependencies.repository;
  }

  public async ensureUniqueEmail<T extends UserEmail, IES extends IAggregateRoot, ES extends AggregateRoot<IES>>(emailValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchByEmail<T, IES, ES>(emailValueObject);

    if (itemFound) {
      throw new EmailAlreadyExistsError(emailValueObject);
    }
  }
}
