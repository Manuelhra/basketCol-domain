import { BusinessDateService } from '../../../../../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../../../../../shared/domain/services/IdUniquenessValidatorService';
import { TeamValidationService } from '../../../../../../../../team/domain/services/TeamValidationService';
import { LeagueSeasonFixtureGameValidationService } from '../../../domain/services/LeagueSeasonFixtureGameValidationService';
import { ITeamLeagueSeasonFixtureGameBoxScore } from '../domain/ITeamLeagueSeasonFixtureGameBoxScore';
import { TeamLeagueSeasonFixtureGameBoxScoreRepository } from '../domain/repository/TeamLeagueSeasonFixtureGameBoxScoreRepository';
import { TeamLeagueSeasonFixtureGameBoxScore } from '../domain/TeamLeagueSeasonFixtureGameBoxScore';
import { TLSFGBoxScoreCreatedAt } from '../domain/value-objects/TLSFGBoxScoreCreatedAt';
import { TLSFGBoxScoreFixtureGameId } from '../domain/value-objects/TLSFGBoxScoreFixtureGameId';
import { TLSFGBoxScoreId } from '../domain/value-objects/TLSFGBoxScoreId';
import { TLSFGBoxScoreTeamId } from '../domain/value-objects/TLSFGBoxScoreTeamId';
import { TLSFGBoxScoreUpdatedAt } from '../domain/value-objects/TLSFGBoxScoreUpdatedAt';
import { CreateTeamLeagueSeasonFixtureGameBoxScoreDTO } from './dto/CreateTeamLeagueSeasonFixtureGameBoxScoreDTO';

export class TeamLeagueSeasonFixtureGameBoxScoreCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #leagueSeasonFixtureGameValidationService: LeagueSeasonFixtureGameValidationService;

  readonly #teamValidationService: TeamValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #teamLeagueSeasonFixtureGameBoxScoreRepository: TeamLeagueSeasonFixtureGameBoxScoreRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    leagueSeasonFixtureGameValidationService: LeagueSeasonFixtureGameValidationService;
    teamValidationService: TeamValidationService;
    businessDateService: BusinessDateService;
    teamLeagueSeasonFixtureGameBoxScoreRepository: TeamLeagueSeasonFixtureGameBoxScoreRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#leagueSeasonFixtureGameValidationService = dependencies.leagueSeasonFixtureGameValidationService;
    this.#teamValidationService = dependencies.teamValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#teamLeagueSeasonFixtureGameBoxScoreRepository = dependencies.teamLeagueSeasonFixtureGameBoxScoreRepository;
  }

  public async run(payload: CreateTeamLeagueSeasonFixtureGameBoxScoreDTO): Promise<void> {
    const {
      id,
      points,
      offensiveRebounds,
      defensiveRebounds,
      assists,
      steals,
      blocks,
      fouls,
      turnovers,
      threePointersAttempted,
      threePointersMade,
      freeThrowsAttempted,
      freeThrowsMade,
      fieldGoalsAttempted,
      fieldGoalsMade,
      fixtureGameId,
      teamId,
    } = payload;

    const tLSFGBoxScoreId: TLSFGBoxScoreId = new TLSFGBoxScoreId(id);
    const tLSFGBoxScoreFixtureGameId: TLSFGBoxScoreFixtureGameId = new TLSFGBoxScoreFixtureGameId(fixtureGameId);
    const tLSFGBoxScoreTeamId: TLSFGBoxScoreTeamId = new TLSFGBoxScoreTeamId(teamId);

    await this.#idUniquenessValidatorService.ensureUniqueId<TLSFGBoxScoreId, ITeamLeagueSeasonFixtureGameBoxScore, TeamLeagueSeasonFixtureGameBoxScore>(tLSFGBoxScoreId);
    await this.#leagueSeasonFixtureGameValidationService.ensureLeagueSeasonFixtureGameExists(tLSFGBoxScoreFixtureGameId.value);
    await this.#teamValidationService.ensureTeamExists(tLSFGBoxScoreTeamId.value);

    const tLSFGBoxScoreCreatedAt: TLSFGBoxScoreCreatedAt = this.#businessDateService.getCurrentDate();
    const tLSFGBoxScoreUpdatedAt: TLSFGBoxScoreUpdatedAt = this.#businessDateService.getCurrentDate();

    const teamLeagueSeasonFixtureGameBoxScore: TeamLeagueSeasonFixtureGameBoxScore = new TeamLeagueSeasonFixtureGameBoxScore(
      id,
      points,
      offensiveRebounds,
      defensiveRebounds,
      assists,
      steals,
      blocks,
      fouls,
      turnovers,
      threePointersAttempted,
      threePointersMade,
      freeThrowsAttempted,
      freeThrowsMade,
      fieldGoalsAttempted,
      fieldGoalsMade,
      tLSFGBoxScoreFixtureGameId.fixtureGameIdAsString,
      tLSFGBoxScoreTeamId.teamIdAsString,
      tLSFGBoxScoreCreatedAt.value,
      tLSFGBoxScoreUpdatedAt.value,
    );

    return this.#teamLeagueSeasonFixtureGameBoxScoreRepository.save(teamLeagueSeasonFixtureGameBoxScore);
  }
}
