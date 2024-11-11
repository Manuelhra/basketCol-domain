import { AggregateRoot } from '../../../../shared/domain/AggregateRoot';
import { ILeagueTeamPrimitives } from './ILeagueTeamPrimitives';
import { LeagueTeamCreatedAt } from './value-objects/LeagueTeamCreatedAt';
import { LeagueTeamDivisionLevel } from './value-objects/LeagueTeamDivisionLevel';
import { LeagueTeamId } from './value-objects/LeagueTeamId';
import { LeagueTeamJoinedAt } from './value-objects/LeagueTeamJoinedAt';
import { LeagueTeamLastPromotionDate } from './value-objects/LeagueTeamLastPromotionDate';
import { LeagueTeamLastRelegationDate } from './value-objects/LeagueTeamLastRelegationDate';
import { LeagueTeamLeagueId } from './value-objects/LeagueTeamLeagueId';
import { LeagueTeamLeftAt } from './value-objects/LeagueTeamLeftAt';
import { LeagueTeamStatus } from './value-objects/LeagueTeamStatus';
import { LeagueTeamTeamId } from './value-objects/LeagueTeamTeamId';

export class LeagueTeam extends AggregateRoot<ILeagueTeamPrimitives> {
  readonly #teamId: LeagueTeamTeamId;

  readonly #leagueId: LeagueTeamLeagueId;

  readonly #status: LeagueTeamStatus;

  readonly #joinedAt: LeagueTeamJoinedAt;

  readonly #leftAt: LeagueTeamLeftAt;

  readonly #divisionLevel: LeagueTeamDivisionLevel;

  readonly #lastPromotionDate: LeagueTeamLastPromotionDate;

  readonly #lastRelegationDate: LeagueTeamLastRelegationDate;

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
    const teamLeagueId: LeagueTeamId = LeagueTeamId.create(id);
    const teamLeagueCreatedAt: LeagueTeamCreatedAt = LeagueTeamCreatedAt.create(createdAt);
    const teamLeagueUpdatedAt: LeagueTeamCreatedAt = LeagueTeamCreatedAt.create(updatedAt);

    super(teamLeagueId, teamLeagueCreatedAt, teamLeagueUpdatedAt);

    this.#teamId = LeagueTeamTeamId.create(teamId);
    this.#leagueId = LeagueTeamLeagueId.create(leagueId);
    this.#status = LeagueTeamStatus.create(status);
    this.#joinedAt = LeagueTeamJoinedAt.create(joinedAt);
    this.#leftAt = LeagueTeamLeftAt.create(leftAt);
    this.#divisionLevel = LeagueTeamDivisionLevel.create(divisionLevel);
    this.#lastPromotionDate = LeagueTeamLastPromotionDate.create(lastPromotionDate);
    this.#lastRelegationDate = LeagueTeamLastRelegationDate.create(lastRelegationDate);
  }

  public override get toPrimitives(): ILeagueTeamPrimitives {
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
  ): LeagueTeam {
    return new LeagueTeam(
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
  ): LeagueTeam {
    return new LeagueTeam(
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
