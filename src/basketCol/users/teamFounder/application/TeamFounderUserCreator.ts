import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { EmailUniquenessValidatorService } from '../../shared/domain/services/EmailUniquenessValidatorService';
import { SecurePasswordCreationService } from '../../shared/domain/services/SecurePasswordCreationService';
import { ITeamFounderUser } from '../domain/ITeamFounderUser';
import { TFURepository } from '../domain/repository/TFURepository';
import { TeamFounderUser } from '../domain/TeamFounderUser';
import { TeamFounderUserId } from '../domain/value-objects/TeamFounderUserId';
import { TFUCreatedAt } from '../domain/value-objects/TFUCreatedAt';
import { TFUEmail } from '../domain/value-objects/TFUEmail';
import { TFUPassword } from '../domain/value-objects/TFUPassword';
import { TFUUpdatedAt } from '../domain/value-objects/TFUUpdatedAt';
import { TeamFounderUserCreatorPayload } from './TeamFounderUserCreatorPayload';

export class TeamFounderUserCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #businessDateService: BusinessDateService;

  readonly #tFURepository: TFURepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    emailUniquenessValidatorService: EmailUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    businessDateService: BusinessDateService;
    tFURepository: TFURepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#tFURepository = dependencies.tFURepository;
  }

  public async run(payload: TeamFounderUserCreatorPayload): Promise<void> {
    const {
      id,
      name,
      biography,
      email,
      password,
    } = payload;

    const teamFounderUserId: TeamFounderUserId = new TeamFounderUserId(id);
    const tFUEmail: TFUEmail = new TFUEmail({ value: email.value, verified: false });

    await this.#idUniquenessValidatorService.ensureUniqueId<TeamFounderUserId, ITeamFounderUser, TeamFounderUser>(teamFounderUserId);
    await this.#emailUniquenessValidatorService.ensureUniqueEmail<TFUEmail, ITeamFounderUser, TeamFounderUser>(tFUEmail);

    const active: boolean = true;
    const tFUPassword: TFUPassword = this.#securePasswordCreationService.createFromPlainText<TFUPassword>(password);
    const tFUCreatedAt: TFUCreatedAt = this.#businessDateService.getCurrentDate();
    const tFUUpdatedAt: TFUUpdatedAt = this.#businessDateService.getCurrentDate();

    const teamFounderUser: TeamFounderUser = new TeamFounderUser(
      teamFounderUserId.getValue(),
      name,
      biography,
      tFUEmail.getValue(),
      tFUPassword.getValue(),
      active,
      tFUCreatedAt.getValue(),
      tFUUpdatedAt.getValue(),
    );

    return this.#tFURepository.save(teamFounderUser);
  }
}
