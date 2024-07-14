import AggregateRoot from '../../../../shared/domain/AggregateRoot';
import { Nullable } from '../../../../shared/domain/Nullable';
import EmailAlreadyExistsError from '../exceptions/EmailAlreadyExistsError';
import UserEmail from '../value-objects/UserEmail';

interface Repository {
  searchByEmail<N extends UserEmail, IES, ES extends AggregateRoot<IES>>(emailValueObject: N): Promise<Nullable<ES>>;
}

class EmailUniquenessValidatorService {
  readonly #repository: Repository;

  constructor(dependencies: { repository: Repository }) {
    this.#repository = dependencies.repository;
  }

  public async ensureUniqueEmail<T extends UserEmail, IES, ES extends AggregateRoot<IES>>(emailValueObject: T): Promise<void> {
    const itemFound: Nullable<ES> = await this.#repository.searchByEmail<T, IES, ES>(emailValueObject);

    if (itemFound) {
      throw new EmailAlreadyExistsError(emailValueObject);
    }
  }
}

export default EmailUniquenessValidatorService;
