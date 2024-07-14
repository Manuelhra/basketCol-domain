import BusinessDateService from '../../shared/domain/services/BusinessDateService';
import IdUniquenessValidatorService from '../../shared/domain/services/IdUniquenessValidatorService';
import LeagueFounderUserValidationService from '../../users/leagueFounder/domain/services/LeagueFounderUserValidationService';
import LeagueFounderUserId from '../../users/leagueFounder/domain/value-objects/LeagueFounderUserId';
import { ILeague } from '../domain/ILeague';
import League from '../domain/League';
import { LeagueRepository } from '../domain/repository/LeagueRepository';
import LeagueValidationNameService from '../domain/services/LeagueValidationNameService';
import LeagueCreationDate from '../domain/value-objects/LeagueCreationDate';
import LeagueId from '../domain/value-objects/LeagueId';
import LeagueName from '../domain/value-objects/LeagueName';
import { LeagueCreatorPayload } from './LeagueCreatorPayload';

class LeagueCreator {
  readonly #businessDateService: BusinessDateService;

  readonly #leagueValidationNameService: LeagueValidationNameService;

  readonly #leagueRepository: LeagueRepository;

  readonly #leagueFounderUserValidationService: LeagueFounderUserValidationService;

  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  constructor(dependencies: {
    BusinessDateService: BusinessDateService;
    leagueValidationNameService: LeagueValidationNameService;
    leagueRepository: LeagueRepository;
    leagueFounderUserValidationService: LeagueFounderUserValidationService;
    idUniquenessValidatorService: IdUniquenessValidatorService;
  }) {
    this.#businessDateService = dependencies.BusinessDateService;
    this.#leagueValidationNameService = dependencies.leagueValidationNameService;
    this.#leagueRepository = dependencies.leagueRepository;
    this.#leagueFounderUserValidationService = dependencies.leagueFounderUserValidationService;
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
  }

  public async run(payload: LeagueCreatorPayload): Promise<void> {
    const {
      id,
      name,
      description,
      level,
      rules,
      location,
    } = payload;

    const leagueId: LeagueId = new LeagueId(id);
    const leagueName: LeagueName = new LeagueName(name);
    const leagueFounderUserId: LeagueFounderUserId = new LeagueFounderUserId(payload.leagueFounderUserId, 'leagueFounderUserId');

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueId, ILeague, League>(leagueId);
    await this.#leagueValidationNameService.ensureIsValidShortName(leagueName);
    await this.#leagueValidationNameService.ensureIsValidOfficialName(leagueName);

    await this.#leagueFounderUserValidationService.ensureFounderUserExists(leagueFounderUserId);

    const creationDate: string = this.#businessDateService.getCurrentDate<LeagueCreationDate>().getValue();
    const isActive: boolean = true;

    const league: League = new League(
      id,
      name,
      description,
      rules,
      level,
      location,
      leagueFounderUserId.getValue(),
      creationDate,
      isActive,
    );

    return this.#leagueRepository.save(league);
  }
}

export default LeagueCreator;
