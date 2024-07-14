import BusinessDateService from '../../../shared/domain/services/BusinessDateService';
import IdUniquenessValidatorService from '../../../shared/domain/services/IdUniquenessValidatorService';
import LeagueValidationService from '../../domain/services/LeagueValidationService';
import LeagueId from '../../domain/value-objects/LeagueId';
import { ILeagueSeason } from '../domain/ILeagueSeason';
import LeagueSeason from '../domain/LeagueSeason';
import { LeagueSeasonRepository } from '../domain/repository/LeagueSeasonRepository';
import LeagueSeasonCreatedAt from '../domain/value-objects/LeagueSeasonCreatedAt';
import LeagueSeasonId from '../domain/value-objects/LeagueSeasonId';
import LeagueSeasonStatus from '../domain/value-objects/LeagueSeasonStatus';
import LeagueSeasonUpdatedAt from '../domain/value-objects/LeagueSeasonUpdatedAt';
import { LeagueSeasonCreatorPayload } from './LeagueSeasonCreatorPayload';

class LeagueSeasonCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  readonly #leagueValidationService: LeagueValidationService;

  readonly #businessDateService: BusinessDateService;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService,
    leagueSeasonRepository: LeagueSeasonRepository,
    leagueValidationService: LeagueValidationService,
    businessDateService: BusinessDateService,
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
    this.#leagueValidationService = dependencies.leagueValidationService;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async run(payload: LeagueSeasonCreatorPayload) : Promise<void> {
    const {
      id,
      name,
      startDate,
      endDate,
    } = payload;

    const leagueSeasonId: LeagueSeasonId = new LeagueSeasonId(id);
    const leagueSeasonStatus: LeagueSeasonStatus = LeagueSeasonStatus.createUpcoming();
    const leagueId: LeagueId = new LeagueId(payload.leagueId);

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonId, ILeagueSeason, LeagueSeason>(leagueSeasonId);
    await this.#leagueValidationService.ensureLeagueExist(leagueId);

    const createdAt: string = this.#businessDateService.getCurrentDate<LeagueSeasonCreatedAt>().getValue();
    const updatedAt: string = this.#businessDateService.getCurrentDate<LeagueSeasonUpdatedAt>().getValue();

    const leagueSeason: LeagueSeason = new LeagueSeason(
      leagueSeasonId.getValue(),
      name,
      startDate,
      endDate,
      leagueSeasonStatus.getValue(),
      leagueId.getValue(),
      createdAt,
      updatedAt,
    );

    return this.#leagueSeasonRepository.save(leagueSeason);
  }
}

export default LeagueSeasonCreator;
