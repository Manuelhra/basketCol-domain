import { CourtValidationService } from '../../../../../facilities/court/domain/services/CourtValidationService';
import { BusinessDateService } from '../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../shared/domain/services/IdUniquenessValidatorService';
import { TeamValidationService } from '../../../../../team/domain/services/TeamValidationService';
import { RefereeUserValidationService } from '../../../../../users/referee/domain/services/RefereeUserValidationService';
import { LeagueSeasonValidationService } from '../../domain/services/LeagueSeasonValidationService';
import { ILeagueSeasonGame } from '../domain/ILeagueSeasonGame';
import { LeagueSeasonGame } from '../domain/LeagueSeasonGame';
import { LeagueSeasonGameRepository } from '../domain/repository/LeagueSeasonGameRepository';
import { LSGameAssistantRefereeId } from '../domain/value-objects/LSGameAssistantRefereeId';
import { LSGameAwayScore } from '../domain/value-objects/LSGameAwayScore';
import { LSGameAwayTeamId } from '../domain/value-objects/LSGameAwayTeamId';
import { LSGameCourtId } from '../domain/value-objects/LSGameCourtId';
import { LSGameCreatedAt } from '../domain/value-objects/LSGameCreatedAt';
import { LSGameDate } from '../domain/value-objects/LSGameDate';
import { LSGameDuration } from '../domain/value-objects/LSGameDuration';
import { LSGameHeadRefereeId } from '../domain/value-objects/LSGameHeadRefereeId';
import { LSGameHomeScore } from '../domain/value-objects/LSGameHomeScore';
import { LSGameHomeTeamId } from '../domain/value-objects/LSGameHomeTeamId';
import { LSGameId } from '../domain/value-objects/LSGameId';
import { LSGameLeagueSeasonId } from '../domain/value-objects/LSGameLeagueSeasonId';
import { LSGameType } from '../domain/value-objects/LSGameType';
import { LSGameUpdatedAt } from '../domain/value-objects/LSGameUpdatedAt';
import { LSGameCreatorPayload } from './LSGameCreatorPayload';

export class LeagueSeasonGameCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #teamValidationService: TeamValidationService;

  readonly #refereeUserValidationService: RefereeUserValidationService;

  readonly #courtValidationService: CourtValidationService;

  readonly #leagueSeasonValidationService: LeagueSeasonValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #leagueSeasonGameRepository: LeagueSeasonGameRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    teamValidationService: TeamValidationService;
    refereeUserValidationService: RefereeUserValidationService;
    courtValidationService: CourtValidationService;
    leagueSeasonValidationService: LeagueSeasonValidationService;
    businessDateService: BusinessDateService;
    leagueSeasonGameRepository: LeagueSeasonGameRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#teamValidationService = dependencies.teamValidationService;
    this.#refereeUserValidationService = dependencies.refereeUserValidationService;
    this.#courtValidationService = dependencies.courtValidationService;
    this.#leagueSeasonValidationService = dependencies.leagueSeasonValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#leagueSeasonGameRepository = dependencies.leagueSeasonGameRepository;
  }

  public async run(payload: LSGameCreatorPayload): Promise<void> {
    const {
      id,
      date,
      homeTeamId,
      awayTeamId,
      homeScore,
      awayScore,
      gameType,
      gameDuration,
      headRefereeId,
      assistantRefereeId,
      courtId,
      leagueSeasonId,
    } = payload;

    const lSGameId: LSGameId = new LSGameId(id);
    const lSGameDate: LSGameDate = new LSGameDate(date);
    const lSGameHomeTeamId: LSGameHomeTeamId = new LSGameHomeTeamId(homeTeamId);
    const lSGameAwayTeamId: LSGameAwayTeamId = new LSGameAwayTeamId(awayTeamId);
    const lSGameHomeScore: LSGameHomeScore = new LSGameHomeScore(homeScore);
    const lSGameAwayScore: LSGameAwayScore = new LSGameAwayScore(awayScore);
    const lSGameType: LSGameType = new LSGameType(gameType);
    const lSGameDuration: LSGameDuration = new LSGameDuration(gameDuration);
    const lSGameHeadRefereeId: LSGameHeadRefereeId = new LSGameHeadRefereeId(headRefereeId);
    const lSGameAssistantRefereeId: LSGameAssistantRefereeId = new LSGameAssistantRefereeId(assistantRefereeId);
    const lSGameCourtId: LSGameCourtId = new LSGameCourtId(courtId);
    const lSGameLeagueSeasonId: LSGameLeagueSeasonId = new LSGameLeagueSeasonId(leagueSeasonId);

    await this.#idUniquenessValidatorService.ensureUniqueId<LSGameId, ILeagueSeasonGame, LeagueSeasonGame>(lSGameId);
    await this.#teamValidationService.ensureTeamExists(lSGameHomeTeamId.value);
    await this.#teamValidationService.ensureTeamExists(lSGameAwayTeamId.value);
    await this.#refereeUserValidationService.ensureRefereeUserExists(lSGameHeadRefereeId.value);
    await this.#refereeUserValidationService.ensureRefereeUserExists(lSGameAssistantRefereeId.value);
    await this.#courtValidationService.ensureCourtExists(lSGameCourtId.value);
    await this.#leagueSeasonValidationService.ensureLeagueSeasonExists(lSGameLeagueSeasonId.value);

    const lSGameCreatedAt: LSGameCreatedAt = this.#businessDateService.getCurrentDate();
    const lSGameUpdatedAt: LSGameUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueSeasonGame: LeagueSeasonGame = new LeagueSeasonGame(
      lSGameId.value,
      lSGameDate.value,
      lSGameHomeTeamId.teamIdAsString,
      lSGameAwayTeamId.teamIdAsString,
      lSGameHomeScore.value,
      lSGameAwayScore.value,
      lSGameType.value,
      lSGameDuration.value.value,
      lSGameHeadRefereeId.refereeUserIdAsString,
      lSGameAssistantRefereeId.refereeUserIdAsString,
      lSGameCourtId.courtIdAsString,
      lSGameLeagueSeasonId.leagueSeasonIdAsString,
      lSGameCreatedAt.value,
      lSGameUpdatedAt.value,
    );

    return this.#leagueSeasonGameRepository.save(leagueSeasonGame);
  }
}
