import { CourtValidationService } from '../../../../../../facilities/court/domain/services/CourtValidationService';
import { BusinessDateService } from '../../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../../shared/domain/services/IdUniquenessValidatorService';
import { TeamValidationService } from '../../../../../../team/domain/services/TeamValidationService';
import { RefereeUserValidationService } from '../../../../../../users/referee/domain/services/RefereeUserValidationService';
import { LeagueSeasonValidationService } from '../../../domain/services/LeagueSeasonValidationService';
import { ILeagueSeasonFixtureGame } from '../domain/ILeagueSeasonFixtureGame';
import { LeagueSeasonFixtureGame } from '../domain/LeagueSeasonFixtureGame';
import { LeagueSeasonFixtureGameRepository } from '../domain/repository/LeagueSeasonFixtureGameRepository';
import { LSFGameAssistantRefereeId } from '../domain/value-objects/LSFGameAssistantRefereeId';
import { LSFGameAwayScore } from '../domain/value-objects/LSFGameAwayScore';
import { LSFGameAwayTeamId } from '../domain/value-objects/LSFGameAwayTeamId';
import { LSFGameCourtId } from '../domain/value-objects/LSFGameCourtId';
import { LSFGameCreatedAt } from '../domain/value-objects/LSFGameCreatedAt';
import { LSFGameFixtureId } from '../domain/value-objects/LSFGameFixtureId';
import { LSFGameHeadRefereeId } from '../domain/value-objects/LSFGameHeadRefereeId';
import { LSFGameHomeScore } from '../domain/value-objects/LSFGameHomeScore';
import { LSFGameHomeTeamId } from '../domain/value-objects/LSFGameHomeTeamId';
import { LSFGameId } from '../domain/value-objects/LSFGameId';
import { LSFGameType } from '../domain/value-objects/LSFGameType';
import { LSFGameUpdatedAt } from '../domain/value-objects/LSFGameUpdatedAt';
import { CreateLeagueSeasonFixtureGameDTO } from './dto/CreateLeagueSeasonFixtureGameDTO';

export class LeagueSeasonFixtureGameCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #teamValidationService: TeamValidationService;

  readonly #refereeUserValidationService: RefereeUserValidationService;

  readonly #courtValidationService: CourtValidationService;

  readonly #leagueSeasonValidationService: LeagueSeasonValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #leagueSeasonFixtureGameRepository: LeagueSeasonFixtureGameRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    teamValidationService: TeamValidationService;
    refereeUserValidationService: RefereeUserValidationService;
    courtValidationService: CourtValidationService;
    leagueSeasonValidationService: LeagueSeasonValidationService;
    businessDateService: BusinessDateService;
    leagueSeasonFixtureGameRepository: LeagueSeasonFixtureGameRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#teamValidationService = dependencies.teamValidationService;
    this.#refereeUserValidationService = dependencies.refereeUserValidationService;
    this.#courtValidationService = dependencies.courtValidationService;
    this.#leagueSeasonValidationService = dependencies.leagueSeasonValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#leagueSeasonFixtureGameRepository = dependencies.leagueSeasonFixtureGameRepository;
  }

  public async run(payload: CreateLeagueSeasonFixtureGameDTO): Promise<void> {
    const {
      id,
      startTime,
      endTime,
      homeTeamId,
      awayTeamId,
      homeScore,
      awayScore,
      gameType,
      gameDuration,
      headRefereeId,
      assistantRefereeId,
      courtId,
      fixtureId,
    } = payload;

    const lSFGameId: LSFGameId = new LSFGameId(id);
    const lSFGameHomeTeamId: LSFGameHomeTeamId = new LSFGameHomeTeamId(homeTeamId);
    const lSFGameAwayTeamId: LSFGameAwayTeamId = new LSFGameAwayTeamId(awayTeamId);
    const lSFGameHomeScore: LSFGameHomeScore = new LSFGameHomeScore(homeScore);
    const lSFGameAwayScore: LSFGameAwayScore = new LSFGameAwayScore(awayScore);
    const lSFGameType: LSFGameType = new LSFGameType(gameType);
    const lSFGameHeadRefereeId: LSFGameHeadRefereeId = new LSFGameHeadRefereeId(headRefereeId);
    const lSFGameAssistantRefereeId: LSFGameAssistantRefereeId = new LSFGameAssistantRefereeId(assistantRefereeId);
    const lSFGameCourtId: LSFGameCourtId = new LSFGameCourtId(courtId);
    const lSFGameFixtureId: LSFGameFixtureId = new LSFGameFixtureId(fixtureId);

    await this.#idUniquenessValidatorService.ensureUniqueId<LSFGameId, ILeagueSeasonFixtureGame, LeagueSeasonFixtureGame>(lSFGameId);
    await this.#teamValidationService.ensureTeamExists(lSFGameHomeTeamId.value);
    await this.#teamValidationService.ensureTeamExists(lSFGameAwayTeamId.value);
    await this.#refereeUserValidationService.ensureRefereeUserExists(lSFGameHeadRefereeId.value);
    await this.#refereeUserValidationService.ensureRefereeUserExists(lSFGameAssistantRefereeId.value);
    await this.#courtValidationService.ensureCourtExists(lSFGameCourtId.value);
    await this.#leagueSeasonValidationService.ensureLeagueSeasonExists(lSFGameFixtureId.value);

    const lSFGameCreatedAt: LSFGameCreatedAt = this.#businessDateService.getCurrentDate();
    const lSFGameUpdatedAt: LSFGameUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueSeasonFixtureGame: LeagueSeasonFixtureGame = new LeagueSeasonFixtureGame(
      lSFGameId.value,
      startTime,
      endTime,
      lSFGameHomeTeamId.teamIdAsString,
      lSFGameAwayTeamId.teamIdAsString,
      lSFGameHomeScore.value,
      lSFGameAwayScore.value,
      lSFGameType.value,
      gameDuration,
      lSFGameHeadRefereeId.refereeUserIdAsString,
      lSFGameAssistantRefereeId.refereeUserIdAsString,
      lSFGameCourtId.courtIdAsString,
      lSFGameFixtureId.fixtureIdAsString,
      lSFGameCreatedAt.value,
      lSFGameUpdatedAt.value,
    );

    return this.#leagueSeasonFixtureGameRepository.save(leagueSeasonFixtureGame);
  }
}
