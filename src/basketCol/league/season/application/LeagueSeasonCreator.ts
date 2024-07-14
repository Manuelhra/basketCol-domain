import IdUniquenessValidatorService from '../../../shared/domain/services/IdUniquenessValidatorService';
import LeagueValidationService from '../../domain/services/LeagueValidationService';
import LeagueId from '../../domain/value-objects/LeagueId';
import { ILeagueSeason } from '../domain/ILeagueSeason';
import LeagueSeason from '../domain/LeagueSeason';
import { LeagueSeasonRepository } from '../domain/repository/LeagueSeasonRepository';
import LeagueSeasonId from '../domain/value-objects/LeagueSeasonId';
import LeagueSeasonStatus from '../domain/value-objects/LeagueSeasonStatus';
import { LeagueSeasonCreatorPayload } from './LeagueSeasonCreatorPayload';

class LeagueSeasonCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  readonly #leagueValidationService: LeagueValidationService;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService,
    leagueSeasonRepository: LeagueSeasonRepository,
    leagueValidationService: LeagueValidationService,
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
    this.#leagueValidationService = dependencies.leagueValidationService;
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

    const leagueSeason: LeagueSeason = new LeagueSeason(
      leagueSeasonId.getValue(),
      name,
      startDate,
      endDate,
      leagueSeasonStatus.getValue(),
      leagueId.getValue(),
    );

    return this.#leagueSeasonRepository.save(leagueSeason);
  }
}

export default LeagueSeasonCreator;
