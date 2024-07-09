import LeagueValidationService from '../../league/domain/services/LeagueValidationService';
import LeagueId from '../../league/domain/value-objects/LeagueId';
import IdUniquenessValidatorService from '../../shared/domain/services/IdUniquenessValidatorService';
import LeagueSeason from '../domain/LeagueSeason';
import { LeagueSeasonRepository } from '../domain/repository/LeagueSeasonRepository';
import LeagueSeasonId from '../domain/value-objects/LeagueSeasonId';
import LeagueSeasonStatus from '../domain/value-objects/LeagueSeasonStatus';
import { LeagueSeasonCreatorPayload } from './LeagueSeasonCreatorPayload';

class LeagueSeasonCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  readonly #leagueValidationService: LeagueValidationService;

  constructor(depedencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService,
    leagueSeasonRepository: LeagueSeasonRepository,
    leagueValidationService: LeagueValidationService,
  }) {
    this.#idUniquenessValidatorService = depedencies.idUniquenessValidatorService;
    this.#leagueSeasonRepository = depedencies.leagueSeasonRepository;
    this.#leagueValidationService = depedencies.leagueValidationService;
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

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonId, LeagueSeason>(leagueSeasonId);
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
