import LeagueFounderUserValidationService from '../../leagueFounderUser/domain/services/LeagueFounderUserValidationService';
import LeagueFounderUserId from '../../leagueFounderUser/domain/value-objects/LeagueFounderUserId';
import BusinessDateService from '../../shared/domain/services/BusinessDateService';
import League from '../domain/League';
import { LeagueRepository } from '../domain/repository/LeagueRepository';
import LeagueValidationNameService from '../domain/services/LeagueValidationNameService';
import LeagueCreationDate from '../domain/value-objects/LeagueCreationDate';
import LeagueName from '../domain/value-objects/LeagueName';
import { LeagueCreatorPayload } from './LeagueCreatorPayload';

class LeagueCreator {
  readonly #businessDateService: BusinessDateService;

  readonly #leagueValidationNameService: LeagueValidationNameService;

  readonly #leagueRepository: LeagueRepository;

  readonly #leagueFounderUserValidationService: LeagueFounderUserValidationService;

  constructor(dependencies: {
    BusinessDateService: BusinessDateService;
    leagueValidationNameService: LeagueValidationNameService;
    leagueRepository: LeagueRepository;
    leagueFounderUserValidationService: LeagueFounderUserValidationService;
  }) {
    this.#businessDateService = dependencies.BusinessDateService;
    this.#leagueValidationNameService = dependencies.leagueValidationNameService;
    this.#leagueRepository = dependencies.leagueRepository;
    this.#leagueFounderUserValidationService = dependencies.leagueFounderUserValidationService;
  }

  public async run(payload: LeagueCreatorPayload): Promise<void> {
    const {
      id,
      name,
      description,
      level,
      rules,
      location,
      founderUserId,
    } = payload;

    const leagueName: LeagueName = new LeagueName(name);
    const leagueFounderUserId: LeagueFounderUserId = new LeagueFounderUserId(founderUserId, 'founderUserId');

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
      founderUserId,
      creationDate,
      isActive,
    );

    return this.#leagueRepository.save(league);
  }
}

export default LeagueCreator;
