import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { EmailUniquenessValidatorService } from '../../shared/domain/services/EmailUniquenessValidatorService';
import { SecurePasswordCreationService } from '../../shared/domain/services/SecurePasswordCreationService';
import { IRefereeUser } from '../domain/IRefereeUser';
import { RefereeUser } from '../domain/RefereeUser';
import { RefereeUserRepository } from '../domain/repository/RefereeUserRepository';
import { RefereeUserCreatedAt } from '../domain/value-objects/RefereeUserCreatedAt';
import { RefereeUserEmail } from '../domain/value-objects/RefereeUserEmail';
import { RefereeUserId } from '../domain/value-objects/RefereeUserId';
import { RefereeUserPassword } from '../domain/value-objects/RefereeUserPassword';
import { RefereeUserUpdatedAt } from '../domain/value-objects/RefereeUserUpdatedAt';
import { RefereeUserCreatorPayload } from './RefereeUserCreatorPayload';

export class RefereeUserCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #businessDateService: BusinessDateService;

  readonly #refereeUserRepository: RefereeUserRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    emailUniquenessValidatorService: EmailUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    businessDateService: BusinessDateService;
    refereeUserRepository: RefereeUserRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#refereeUserRepository = dependencies.refereeUserRepository;
  }

  public async run(payload: RefereeUserCreatorPayload): Promise<void> {
    const {
      id,
      name,
      biography,
      email,
      password,
    } = payload;

    const refereeUserId: RefereeUserId = new RefereeUserId(id);
    const refereeUserEmail: RefereeUserEmail = new RefereeUserEmail({ value: email.value, verified: false });

    await this.#idUniquenessValidatorService.ensureUniqueId<RefereeUserId, IRefereeUser, RefereeUser>(refereeUserId);
    await this.#emailUniquenessValidatorService.ensureUniqueEmail<RefereeUserEmail, IRefereeUser, RefereeUser>(refereeUserEmail);

    const active: boolean = true;
    const refereeUserPassword: RefereeUserPassword = this.#securePasswordCreationService.createFromPlainText<RefereeUserPassword>(password);
    const refereeUserCreatedAt: RefereeUserCreatedAt = this.#businessDateService.getCurrentDate<RefereeUserCreatedAt>();
    const refereeUserUpdatedAt: RefereeUserUpdatedAt = this.#businessDateService.getCurrentDate<RefereeUserUpdatedAt>();

    const refereeUser: RefereeUser = new RefereeUser(
      refereeUserId.getValue(),
      name,
      biography,
      refereeUserEmail.getValue(),
      refereeUserPassword.getValue(),
      active,
      refereeUserCreatedAt.getValue(),
      refereeUserUpdatedAt.getValue(),
    );

    return this.#refereeUserRepository.save(refereeUser);
  }
}
