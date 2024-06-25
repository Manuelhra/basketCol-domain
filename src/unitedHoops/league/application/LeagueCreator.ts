import BusinessDateService from '../../shared/domain/services/BusinessDateService';
import League from '../domain/League';
import { LeagueRepository } from '../domain/repository/LeagueRepository';
import LeagueValidationNameService from '../domain/services/LeagueValidationNameService';
import LeagueName from '../domain/value-objects/LeagueName';
import { LeagueCreatorPayload } from './LeagueCreatorPayload';

class LeagueCreator {
  readonly #businessDateService: BusinessDateService;

  readonly #leagueValidationNameService: LeagueValidationNameService;

  readonly #leagueRepository: LeagueRepository;

  constructor(dependencies: {
    BusinessDateService: BusinessDateService;
    leagueValidationNameService: LeagueValidationNameService;
    leagueRepository: LeagueRepository;
  }) {
    this.#businessDateService = dependencies.BusinessDateService;
    this.#leagueValidationNameService = dependencies.leagueValidationNameService;
    this.#leagueRepository = dependencies.leagueRepository;
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

    const leagueName: LeagueName = new LeagueName(name);

    await this.#leagueValidationNameService.ensureIsValidShortName(leagueName);
    await this.#leagueValidationNameService.ensureIsValidOfficialName(leagueName);

    const creationDate: string = this.#businessDateService.getCurrentDate('creationDate').getValue();
    const isActive: boolean = true;

    const league: League = new League(
      id,
      name,
      description,
      rules,
      level,
      location,
      creationDate,
      isActive,
    );

    return this.#leagueRepository.save(league);
  }
}

export default LeagueCreator;
