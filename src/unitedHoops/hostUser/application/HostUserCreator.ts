import { Nullable } from '../../shared/domain/Nullable';
import PasswordValueObjectFactory from '../../shared/domain/PasswordValueObjectFactory';
import HostUser from '../domain/HostUser';
import PreExistingHostUser from '../domain/exceptions/PreExistingHostUser';
import { HostUserRepository } from '../domain/repository/HostUserRepository';
import { HostUserCreatorPayload } from './HostUserCreatorPayload';

class HostUserCreator {
  readonly #hostUserRepository: HostUserRepository;

  readonly #passworHostUserFactory: PasswordValueObjectFactory;

  constructor(dependencies: {
    hostUserRepository: HostUserRepository;
    passwordHostUserFactory: PasswordValueObjectFactory;
  }) {
    this.#hostUserRepository = dependencies.hostUserRepository;
    this.#passworHostUserFactory = dependencies.passwordHostUserFactory;
  }

  public async run(payload: HostUserCreatorPayload): Promise<void> {
    const hostUserFound: Nullable<HostUser> = await this.#hostUserRepository.search();

    if (hostUserFound) {
      throw new PreExistingHostUser();
    }

    const { id, email, password } = payload;
    const hostUser: HostUser = new HostUser(
      id,
      { value: email.value, verified: false },
      this.#passworHostUserFactory.createFromPlainText(password),
      true,
    );

    return this.#hostUserRepository.save(hostUser);
  }
}

export default HostUserCreator;
