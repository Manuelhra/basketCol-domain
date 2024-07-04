import EmailUniquenessValidatorService from '../../shared/domain/services/EmailUniquenessValidatorService';
import IdUniquenessValidatorService from '../../shared/domain/services/IdUniquenessValidatorService';
import SecurePasswordCreationService from '../../shared/domain/services/SecurePasswordCreationService';
import LeagueFounderUser from '../domain/LeagueFounderUser';
import { LeagueFounderUserRepository } from '../domain/repository/LeagueFounderUserRepository';
import LeagueFounderUserEmail from '../domain/value-objects/LeagueFounderUserEmail';
import LeagueFounderUserId from '../domain/value-objects/LeagueFounderUserId';
import LeagueFounderUserPassword from '../domain/value-objects/LeagueFounderUserPassword';
import { LeagueFounderUserCreatorPayload } from './LeagueFounderUserCreatorPayload';

class LeagueFounderUserCreator {
  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService<LeagueFounderUser>;

  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #leagueFounderUserRepository: LeagueFounderUserRepository;

  constructor(dependencies: {
    emailUniquenessValidatorService: EmailUniquenessValidatorService<LeagueFounderUser>;
    idUniquenessValidatorService: IdUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    leagueFounderUserRepository: LeagueFounderUserRepository;
  }) {
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#leagueFounderUserRepository = dependencies.leagueFounderUserRepository;
  }

  public async run(leagueFounderUserCreatorPayload: LeagueFounderUserCreatorPayload): Promise<void> {
    const {
      id,
      email,
      name,
      biography,
      password,
    } = leagueFounderUserCreatorPayload;

    const leagueFounderUserId: LeagueFounderUserId = new LeagueFounderUserId(id);
    const leagueFounderUserEmail: LeagueFounderUserEmail = new LeagueFounderUserEmail({ value: email.value, verified: false });

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueFounderUserId, LeagueFounderUser>(leagueFounderUserId);
    await this.#emailUniquenessValidatorService.ensureUniqueEmail<LeagueFounderUserEmail>(leagueFounderUserEmail);

    const active: boolean = true;

    const leagueFounderUser: LeagueFounderUser = new LeagueFounderUser(
      id,
      name,
      biography,
      { value: email.value, verified: false },
      this.#securePasswordCreationService.createFromPlainText<LeagueFounderUserPassword>(password).getValue(),
      'LEAGUE_FOUNDER_USER',
      active,
    );

    return this.#leagueFounderUserRepository.save(leagueFounderUser);
  }
}

export default LeagueFounderUserCreator;
