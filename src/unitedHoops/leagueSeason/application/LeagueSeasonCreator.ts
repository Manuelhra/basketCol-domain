import IdUniquenessValidatorService from '../../shared/domain/services/IdUniquenessValidatorService';
import LeagueSeason from '../domain/LeagueSeason';
import { LeagueSeasonRepository } from '../domain/repository/LeagueSeasonRepository';
import LeagueSeasonId from '../domain/value-objects/LeagueSeasonId';
import LeagueSeasonStatus from '../domain/value-objects/LeagueSeasonStatus';
import { LeagueSeasonCreatorPayload } from './LeagueSeasonCreatorPayload';

class LeagueSeasonCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  constructor(depedencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService,
    leagueSeasonRepository: LeagueSeasonRepository
  }) {
    this.#idUniquenessValidatorService = depedencies.idUniquenessValidatorService;
    this.#leagueSeasonRepository = depedencies.leagueSeasonRepository;
  }

  public async run(payload: LeagueSeasonCreatorPayload) : Promise<void> {
    const {
      id,
      name,
      startDate,
      endDate,
      leagueId,
    } = payload;

    // TODO: Validar que existe la liga, crear el servicio de dominio en la carpeta de liga

    const leagueSeasonId: LeagueSeasonId = new LeagueSeasonId(id);
    const leagueSeasonStatus: LeagueSeasonStatus = LeagueSeasonStatus.createUpcoming();

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonId, LeagueSeason>(leagueSeasonId);

    const leagueSeason: LeagueSeason = new LeagueSeason(
      leagueSeasonId.getValue(),
      name,
      startDate,
      endDate,
      leagueSeasonStatus.getValue(),
    );

    return this.#leagueSeasonRepository.save(leagueSeason);
  }
}

export default LeagueSeasonCreator;
