import { BusinessDateService } from '../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../shared/domain/services/IdUniquenessValidatorService';
import { TFUValidationService } from '../../users/team-founder/domain/services/TFUValidationService';
import { ITeam } from '../domain/ITeam';
import { TeamRepository } from '../domain/repository/TeamRepository';
import { Team } from '../domain/Team';
import { TeamCreatedAt } from '../domain/value-objects/TeamCreatedAt';
import { TeamId } from '../domain/value-objects/TeamId';
import { TeamUpdatedAt } from '../domain/value-objects/TeamUpdatedAt';
import { TReferencedTeamFounderUserId } from '../domain/value-objects/TReferencedTeamFounderUserId';
import { CreateTeamDTO } from './dto/CreateTeamDTO';

export class TeamCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #tFUValidationService: TFUValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #teamRepository: TeamRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    tFUValidationService: TFUValidationService;
    businessDateService: BusinessDateService;
    teamRepository: TeamRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#tFUValidationService = dependencies.tFUValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#teamRepository = dependencies.teamRepository;
  }

  public async run(payload: CreateTeamDTO): Promise<void> {
    const {
      id,
      officialName,
      teamFounderUserId,
    } = payload;

    const teamId: TeamId = new TeamId(id);
    const tReferencedTeamFounderUserId: TReferencedTeamFounderUserId = new TReferencedTeamFounderUserId(teamFounderUserId);

    await this.#idUniquenessValidatorService.ensureUniqueId<TeamId, ITeam, Team>(teamId);
    await this.#tFUValidationService.ensureTeamFounderUserExists(tReferencedTeamFounderUserId.value);

    const teamCreatedAt: TeamCreatedAt = this.#businessDateService.getCurrentDate();
    const teamUpdatedAt: TeamUpdatedAt = this.#businessDateService.getCurrentDate();

    const team: Team = new Team(
      teamId.value,
      officialName,
      tReferencedTeamFounderUserId.teamFounderUserIdAsString,
      teamCreatedAt.value,
      teamUpdatedAt.value,
    );

    return this.#teamRepository.save(team);
  }
}
