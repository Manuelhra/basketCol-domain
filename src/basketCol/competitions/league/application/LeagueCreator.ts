import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { DateValueObject } from '../../../shared/domain/value-objects/DateValueObject';
import { LeagueFounderUserValidationService } from '../../../users/leagueFounder/domain/services/LeagueFounderUserValidationService';
import { LeagueFounderUserId } from '../../../users/leagueFounder/domain/value-objects/LeagueFounderUserId';
import { ILeague } from '../domain/ILeague';
import { League } from '../domain/League';
import { LeagueRepository } from '../domain/repository/LeagueRepository';
import { LeagueValidationNameService } from '../domain/services/LeagueValidationNameService';
import { LeagueCreatedAt } from '../domain/value-objects/LeagueCreatedAt';
import { LeagueEstablishmentDate } from '../domain/value-objects/LeagueEstablishmentDate';
import { LeagueId } from '../domain/value-objects/LeagueId';
import { LeagueName } from '../domain/value-objects/LeagueName';
import { LeagueUpdatedAt } from '../domain/value-objects/LeagueUpdatedAt';
import { CreateLeagueDTO } from './dto/CreateLeagueDTO';

export class LeagueCreator {
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

  public async run(payload: CreateLeagueDTO): Promise<void> {
    const {
      id,
      name,
      description,
      level,
      rules,
      location,
      establishmentDate,
    } = payload;

    const leagueId: LeagueId = new LeagueId(id);
    const leagueName: LeagueName = new LeagueName(name);
    const leagueFounderUserId: LeagueFounderUserId = new LeagueFounderUserId(payload.leagueFounderUserId, 'leagueFounderUserId');
    const leagueEstablishmentDate: LeagueEstablishmentDate = new LeagueEstablishmentDate(establishmentDate);
    const currentDate: DateValueObject = this.#businessDateService.getCurrentDate();

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueId, ILeague, League>(leagueId);
    await this.#leagueValidationNameService.validateUniqueShortName(leagueName);
    await this.#leagueValidationNameService.validateUniqueOfficialName(leagueName);

    await this.#leagueFounderUserValidationService.ensureFounderUserExists(leagueFounderUserId);
    this.#businessDateService.ensureNotGreaterThan<LeagueEstablishmentDate, DateValueObject>(leagueEstablishmentDate, currentDate);

    const isActive: boolean = true;
    const leagueCreatedAt: LeagueCreatedAt = this.#businessDateService.getCurrentDate();
    const leagueUpdatedAt: LeagueUpdatedAt = this.#businessDateService.getCurrentDate();

    const league: League = new League(
      leagueId.value,
      name,
      description,
      rules,
      level,
      location,
      leagueFounderUserId.value,
      leagueEstablishmentDate.value,
      isActive,
      leagueCreatedAt.value,
      leagueUpdatedAt.value,
    );

    return this.#leagueRepository.save(league);
  }
}
