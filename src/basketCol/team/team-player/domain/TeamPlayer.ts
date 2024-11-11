import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ITeamPlayerPrimitives } from './ITeamPlayerPrimitives';
import { TeamPlayerCreatedAt } from './value-objects/TeamPlayerCreatedAt';
import { TeamPlayerId } from './value-objects/TeamPlayerId';
import { TeamPlayerJerseyNumber } from './value-objects/TeamPlayerJerseyNumber';
import { TeamPlayerJoinedAt } from './value-objects/TeamPlayerJoinedAt';
import { TeamPlayerLeftAt } from './value-objects/TeamPlayerLeftAt';
import { TeamPlayerPlayerUserId } from './value-objects/TeamPlayerPlayerUserId';
import { TeamPlayerPosition } from './value-objects/TeamPlayerPosition';
import { TeamPlayerStatus } from './value-objects/TeamPlayerStatus';
import { TeamPlayerTeamId } from './value-objects/TeamPlayerTeamId';

export class TeamPlayer extends AggregateRoot<ITeamPlayerPrimitives> {
  readonly #teamId: TeamPlayerTeamId;

  readonly #playerUserId: TeamPlayerPlayerUserId;

  readonly #status: TeamPlayerStatus;

  readonly #jerseyNumber: TeamPlayerJerseyNumber;

  readonly #position: TeamPlayerPosition;

  readonly #joinedAt: TeamPlayerJoinedAt;

  readonly #leftAt: TeamPlayerLeftAt;

  private constructor(
    id: string,
    teamId: string,
    playerUserId: string,
    status: string,
    jerseyNumber: number | null,
    position: string | null,
    joinedAt: string,
    leftAt: string | null,
    createdAt: string,
    updatedAt: string,
  ) {
    const teamPlayerId: TeamPlayerId = TeamPlayerId.create(id);
    const teamPlayerCreatedAt: TeamPlayerCreatedAt = TeamPlayerCreatedAt.create(createdAt);
    const teamPlayerUpdatedAt: TeamPlayerCreatedAt = TeamPlayerCreatedAt.create(updatedAt);

    super(teamPlayerId, teamPlayerCreatedAt, teamPlayerUpdatedAt);

    this.#teamId = TeamPlayerTeamId.create(teamId);
    this.#playerUserId = TeamPlayerPlayerUserId.create(playerUserId);
    this.#status = TeamPlayerStatus.create(status);
    this.#jerseyNumber = TeamPlayerJerseyNumber.create(jerseyNumber);
    this.#position = TeamPlayerPosition.create(position);
    this.#joinedAt = TeamPlayerJoinedAt.create(joinedAt);
    this.#leftAt = TeamPlayerLeftAt.create(leftAt);
  }

  public override get toPrimitives(): ITeamPlayerPrimitives {
    return {
      id: this.id.value,
      teamId: this.#teamId.value,
      playerUserId: this.#playerUserId.value,
      status: this.#status.value,
      jerseyNumber: this.#jerseyNumber.value,
      position: this.#position.value,
      joinedAt: this.#joinedAt.value,
      leftAt: this.#leftAt.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    teamId: string,
    playerUserId: string,
    status: string,
    jerseyNumber: number | null,
    position: string | null,
    joinedAt: string,
    leftAt: string | null,
    createdAt: string,
    updatedAt: string,
  ): TeamPlayer {
    return new TeamPlayer(
      id,
      teamId,
      playerUserId,
      status,
      jerseyNumber,
      position,
      joinedAt,
      leftAt,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    teamId: string,
    playerUserId: string,
    status: string,
    jerseyNumber: number | null,
    position: string | null,
    joinedAt: string,
    leftAt: string | null,
    createdAt: string,
    updatedAt: string,
  ): TeamPlayer {
    return new TeamPlayer(
      id,
      teamId,
      playerUserId,
      status,
      jerseyNumber,
      position,
      joinedAt,
      leftAt,
      createdAt,
      updatedAt,
    );
  }
}
