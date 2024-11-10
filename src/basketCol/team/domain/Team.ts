import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { ITeamPrimitives } from './ITeamPrimitives';
import { TeamCreatedAt } from './value-objects/TeamCreatedAt';
import { TeamId } from './value-objects/TeamId';
import { TeamOfficialName } from './value-objects/TeamOfficialName';
import { TeamUpdatedAt } from './value-objects/TeamUpdatedAt';
import { TReferencedTeamFounderUserId } from './value-objects/TReferencedTeamFounderUserId';

export class Team extends AggregateRoot<ITeamPrimitives> {
  readonly #officialName: TeamOfficialName;

  readonly #teamFounderUserId: TReferencedTeamFounderUserId;

  private constructor(
    id: string,
    officialName: string,
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const teamId: TeamId = TeamId.create(id);
    const teamCreatedAt: TeamCreatedAt = TeamCreatedAt.create(createdAt);
    const teamUpdatedAt: TeamUpdatedAt = TeamUpdatedAt.create(updatedAt);

    super(teamId, teamCreatedAt, teamUpdatedAt);

    this.#officialName = TeamOfficialName.create(officialName);
    this.#teamFounderUserId = TReferencedTeamFounderUserId.create(teamFounderUserId);
  }

  public override get toPrimitives(): ITeamPrimitives {
    return {
      id: this.id.value,
      officialName: this.#officialName.value,
      teamFounderUserId: this.#teamFounderUserId.teamFounderUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    officialName: string,
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ): Team {
    return new Team(
      id,
      officialName,
      teamFounderUserId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    officialName: string,
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ): Team {
    return new Team(
      id,
      officialName,
      teamFounderUserId,
      createdAt,
      updatedAt,
    );
  }
}
