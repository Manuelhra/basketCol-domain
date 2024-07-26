import { GymValidationService } from '../../../../gym/domain/services/GymValidationService';
import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../shared/domain/services/IdUniquenessValidatorService';
import { LeagueValidationService } from '../../domain/services/LeagueValidationService';
import { LeagueId } from '../../domain/value-objects/LeagueId';
import { ILeagueSeason } from '../domain/ILeagueSeason';
import { LeagueSeason } from '../domain/LeagueSeason';
import { LeagueSeasonRepository } from '../domain/repository/LeagueSeasonRepository';
import { LeagueSeasonCreatedAt } from '../domain/value-objects/LeagueSeasonCreatedAt';
import { LeagueSeasonGymIdList } from '../domain/value-objects/LeagueSeasonGymIdList';
import { LeagueSeasonId } from '../domain/value-objects/LeagueSeasonId';
import { LeagueSeasonStatus } from '../domain/value-objects/LeagueSeasonStatus';
import { LeagueSeasonUpdatedAt } from '../domain/value-objects/LeagueSeasonUpdatedAt';
import { LeagueSeasonCreatorPayload } from './LeagueSeasonCreatorPayload';

export class LeagueSeasonCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  readonly #leagueValidationService: LeagueValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #gymValidationService: GymValidationService;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    leagueSeasonRepository: LeagueSeasonRepository;
    leagueValidationService: LeagueValidationService;
    businessDateService: BusinessDateService;
    gymValidationService: GymValidationService;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
    this.#leagueValidationService = dependencies.leagueValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#gymValidationService = dependencies.gymValidationService;
  }

  public async run(payload: LeagueSeasonCreatorPayload) : Promise<void> {
    const {
      id,
      name,
      startDate,
      endDate,
      gymIdList,
    } = payload;

    const leagueSeasonId: LeagueSeasonId = new LeagueSeasonId(id);
    const leagueSeasonStatus: LeagueSeasonStatus = LeagueSeasonStatus.createUpcoming();
    const leagueId: LeagueId = new LeagueId(payload.leagueId);
    const leagueSeasonGymIdList: LeagueSeasonGymIdList = new LeagueSeasonGymIdList(gymIdList);

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonId, ILeagueSeason, LeagueSeason>(leagueSeasonId);
    await this.#leagueValidationService.ensureLeagueExist(leagueId);
    await this.#gymValidationService.ensureGymsExist(leagueSeasonGymIdList);

    const leagueSeasonCreatedAt: LeagueSeasonCreatedAt = this.#businessDateService.getCurrentDate();
    const leagueSeasonUpdatedAt: LeagueSeasonUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueSeason: LeagueSeason = new LeagueSeason(
      leagueSeasonId.value,
      name,
      startDate,
      endDate,
      leagueSeasonStatus.value,
      leagueSeasonGymIdList.gymIdListAsStrings,
      leagueId.value,
      leagueSeasonCreatedAt.value,
      leagueSeasonUpdatedAt.value,
    );

    return this.#leagueSeasonRepository.save(leagueSeason);
  }
}
