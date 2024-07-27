import { CourtValidationService } from '../../../../facilities/court/domain/services/CourtValidationService';
import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../shared/domain/services/IdUniquenessValidatorService';
import { LeagueValidationService } from '../../domain/services/LeagueValidationService';
import { LeagueId } from '../../domain/value-objects/LeagueId';
import { ILeagueSeason } from '../domain/ILeagueSeason';
import { LeagueSeason } from '../domain/LeagueSeason';
import { LeagueSeasonRepository } from '../domain/repository/LeagueSeasonRepository';
import { LeagueSeasonCreatedAt } from '../domain/value-objects/LeagueSeasonCreatedAt';
import { LeagueSeasonId } from '../domain/value-objects/LeagueSeasonId';
import { LeagueSeasonStatus } from '../domain/value-objects/LeagueSeasonStatus';
import { LeagueSeasonUpdatedAt } from '../domain/value-objects/LeagueSeasonUpdatedAt';
import { LSReferencedCourtIdList } from '../domain/value-objects/LSReferencedCourtIdList';
import { LeagueSeasonCreatorPayload } from './LeagueSeasonCreatorPayload';

export class LeagueSeasonCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonRepository: LeagueSeasonRepository;

  readonly #leagueValidationService: LeagueValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #courtValidationService: CourtValidationService;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    leagueSeasonRepository: LeagueSeasonRepository;
    leagueValidationService: LeagueValidationService;
    businessDateService: BusinessDateService;
    courtValidationService: CourtValidationService;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonRepository = dependencies.leagueSeasonRepository;
    this.#leagueValidationService = dependencies.leagueValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#courtValidationService = dependencies.courtValidationService;
  }

  public async run(payload: LeagueSeasonCreatorPayload): Promise<void> {
    const {
      id,
      name,
      startDate,
      endDate,
      courtIdList,
    } = payload;

    const leagueSeasonId: LeagueSeasonId = new LeagueSeasonId(id);
    const leagueSeasonStatus: LeagueSeasonStatus = LeagueSeasonStatus.createUpcoming();
    const leagueId: LeagueId = new LeagueId(payload.leagueId);
    const leagueSeasonCourtIdList: LSReferencedCourtIdList = new LSReferencedCourtIdList(courtIdList);

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueSeasonId, ILeagueSeason, LeagueSeason>(leagueSeasonId);
    await this.#leagueValidationService.ensureLeagueExist(leagueId);
    await this.#courtValidationService.ensureCourtsExist(leagueSeasonCourtIdList);

    const leagueSeasonCreatedAt: LeagueSeasonCreatedAt = this.#businessDateService.getCurrentDate();
    const leagueSeasonUpdatedAt: LeagueSeasonUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueSeason: LeagueSeason = new LeagueSeason(
      leagueSeasonId.value,
      name,
      startDate,
      endDate,
      leagueSeasonStatus.value,
      leagueSeasonCourtIdList.courtIdListAsStrings,
      leagueId.value,
      leagueSeasonCreatedAt.value,
      leagueSeasonUpdatedAt.value,
    );

    return this.#leagueSeasonRepository.save(leagueSeason);
  }
}
