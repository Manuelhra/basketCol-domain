import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ITeamLeaguePrimitives } from './ITeamLeaguePrimitives';
import { TeamLeagueCreatedAt } from './value-objects/TeamLeagueCreatedAt';
import { TeamLeagueDivisionLevel } from './value-objects/TeamLeagueDivisionLevel';
import { TeamLeagueId } from './value-objects/TeamLeagueId';
import { TeamLeagueJoinedAt } from './value-objects/TeamLeagueJoinedAt';
import { TeamLeagueLastPromotionDate } from './value-objects/TeamLeagueLastPromotionDate';
import { TeamLeagueLastRelegationDate } from './value-objects/TeamLeagueLastRelegationDate';
import { TeamLeagueLeagueId } from './value-objects/TeamLeagueLeagueId';
import { TeamLeagueLeftAt } from './value-objects/TeamLeagueLeftAt';
import { TeamLeagueStatus } from './value-objects/TeamLeagueStatus';
import { TeamLeagueTeamId } from './value-objects/TeamLeagueTeamId';

export class TeamLeague extends AggregateRoot<ITeamLeaguePrimitives> {
  readonly #teamId: TeamLeagueTeamId;

  readonly #leagueId: TeamLeagueLeagueId;

  readonly #status: TeamLeagueStatus;

  readonly #joinedAt: TeamLeagueJoinedAt;

  readonly #leftAt: TeamLeagueLeftAt;

  readonly #divisionLevel: TeamLeagueDivisionLevel;

  readonly #lastPromotionDate: TeamLeagueLastPromotionDate;

  readonly #lastRelegationDate: TeamLeagueLastRelegationDate;

  private constructor(
    id: string,
    teamId: string,
    leagueId: string,
    status: string,
    joinedAt: string,
    leftAt: string | null,
    divisionLevel: string | null,
    lastPromotionDate: string | null,
    lastRelegationDate: string | null,
    createdAt: string,
    updatedAt: string,
  ) {
    const teamLeagueId: TeamLeagueId = TeamLeagueId.create(id);
    const teamLeagueCreatedAt: TeamLeagueCreatedAt = TeamLeagueCreatedAt.create(createdAt);
    const teamLeagueUpdatedAt: TeamLeagueCreatedAt = TeamLeagueCreatedAt.create(updatedAt);

    super(teamLeagueId, teamLeagueCreatedAt, teamLeagueUpdatedAt);

    this.#teamId = TeamLeagueTeamId.create(teamId);
    this.#leagueId = TeamLeagueLeagueId.create(leagueId);
    this.#status = TeamLeagueStatus.create(status);
    this.#joinedAt = TeamLeagueJoinedAt.create(joinedAt);
    this.#leftAt = TeamLeagueLeftAt.create(leftAt);
    this.#divisionLevel = TeamLeagueDivisionLevel.create(divisionLevel);
    this.#lastPromotionDate = TeamLeagueLastPromotionDate.create(lastPromotionDate);
    this.#lastRelegationDate = TeamLeagueLastRelegationDate.create(lastRelegationDate);
  }

  public override get toPrimitives(): ITeamLeaguePrimitives {
    return {
      id: this.id.value,
      teamId: this.#teamId.value,
      leagueId: this.#leagueId.value,
      status: this.#status.value,
      joinedAt: this.#joinedAt.value,
      leftAt: this.#leftAt.value,
      divisionLevel: this.#divisionLevel.value,
      lastPromotionDate: this.#lastPromotionDate.value,
      lastRelegationDate: this.#lastRelegationDate.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    teamId: string,
    leagueId: string,
    status: string,
    joinedAt: string,
    leftAt: string | null,
    divisionLevel: string | null,
    lastPromotionDate: string | null,
    lastRelegationDate: string | null,
    createdAt: string,
    updatedAt: string,
  ): TeamLeague {
    return new TeamLeague(
      id,
      teamId,
      leagueId,
      status,
      joinedAt,
      leftAt,
      divisionLevel,
      lastPromotionDate,
      lastRelegationDate,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    teamId: string,
    leagueId: string,
    status: string,
    joinedAt: string,
    leftAt: string | null,
    divisionLevel: string | null,
    lastPromotionDate: string | null,
    lastRelegationDate: string | null,
    createdAt: string,
    updatedAt: string,
  ): TeamLeague {
    return new TeamLeague(
      id,
      teamId,
      leagueId,
      status,
      joinedAt,
      leftAt,
      divisionLevel,
      lastPromotionDate,
      lastRelegationDate,
      createdAt,
      updatedAt,
    );
  }
}
