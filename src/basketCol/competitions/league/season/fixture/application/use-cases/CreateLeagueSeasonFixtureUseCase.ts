import { BusinessDateService } from '../../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../../shared/domain/services/IdUniquenessValidatorService';
import { LeagueSeasonValidationService } from '../../../domain/services/LeagueSeasonValidationService';
import { ILeagueSeasonFixture } from '../../domain/ILeagueSeasonFixture';
import { LeagueSeasonFixture } from '../../domain/LeagueSeasonFixture';
import { ILeagueSeasonFixtureRepository } from '../../domain/repository/ILeagueSeasonFixtureRepository';
import { LeagueSeasonFixtureValidationService } from '../../domain/services/LeagueSeasonFixtureValidationService';
import { LSFixtureCreatedAt } from '../../domain/value-objects/LSFixtureCreatedAt';
import { LSFixtureDate } from '../../domain/value-objects/LSFixtureDate';
import { LSFixtureId } from '../../domain/value-objects/LSFixtureId';
import { LSFixtureLeagueSeasonId } from '../../domain/value-objects/LSFixtureLeagueSeasonId';
import { LSFixtureUpdatedAt } from '../../domain/value-objects/LSFixtureUpdatedAt';
import { CreateLeagueSeasonFixtureDTO } from '../dto/CreateLeagueSeasonFixtureDTO';

export class CreateLeagueSeasonFixtureUseCase {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonValidationService: LeagueSeasonValidationService;

  readonly #leagueSeasonFixtureValidationService: LeagueSeasonFixtureValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #leagueSeasonFixtureRepository: ILeagueSeasonFixtureRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    leagueSeasonValidationService: LeagueSeasonValidationService;
    leagueSeasonFixtureValidationService: LeagueSeasonFixtureValidationService;
    businessDateService: BusinessDateService;
    leagueSeasonFixtureRepository: ILeagueSeasonFixtureRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonValidationService = dependencies.leagueSeasonValidationService;
    this.#leagueSeasonFixtureValidationService = dependencies.leagueSeasonFixtureValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#leagueSeasonFixtureRepository = dependencies.leagueSeasonFixtureRepository;
  }

  public async run(payload: CreateLeagueSeasonFixtureDTO): Promise<void> {
    const {
      id,
      date,
      name,
      leagueSeasonId,
    } = payload;

    const lSFixtureId: LSFixtureId = new LSFixtureId(id);
    const lSFixtureDate: LSFixtureDate = new LSFixtureDate(date);
    const lSFixtureLeagueSeasonId: LSFixtureLeagueSeasonId = new LSFixtureLeagueSeasonId(leagueSeasonId);

    await this.#idUniquenessValidatorService.ensureUniqueId<LSFixtureId, ILeagueSeasonFixture, LeagueSeasonFixture>(lSFixtureId);
    await this.#leagueSeasonValidationService.ensureLeagueSeasonExists(lSFixtureLeagueSeasonId.value);
    await this.#leagueSeasonFixtureValidationService.ensureNoFixtureExistsForDateAndLeagueSeason(lSFixtureLeagueSeasonId, lSFixtureDate);

    const lSFixtureCreatedAt: LSFixtureCreatedAt = this.#businessDateService.getCurrentDate();
    const lSFixtureUpdatedAt: LSFixtureUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueSeasonFixture: LeagueSeasonFixture = new LeagueSeasonFixture(
      lSFixtureId.value,
      lSFixtureDate.dateAsString,
      name,
      lSFixtureLeagueSeasonId.leagueSeasonIdAsString,
      lSFixtureCreatedAt.value,
      lSFixtureUpdatedAt.value,
    );

    return this.#leagueSeasonFixtureRepository.save(leagueSeasonFixture);
  }
}
