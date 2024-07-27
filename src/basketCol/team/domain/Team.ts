import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { ITeam } from './ITeam';
import { TeamCreatedAt } from './value-objects/TeamCreatedAt';
import { TeamId } from './value-objects/TeamId';
import { TeamOfficialName } from './value-objects/TeamOfficialName';
import { TeamUpdatedAt } from './value-objects/TeamUpdatedAt';
import { TReferencedTeamFounderUserId } from './value-objects/TReferencedTeamFounderUserId';

export class Team extends AggregateRoot<ITeam> {
  readonly #officialName: TeamOfficialName;

  readonly #teamFounderUserId: TReferencedTeamFounderUserId;

  constructor(
    id: string,
    officialName: string,
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const teamId: TeamId = new TeamId(id);
    const teamCreatedAt: TeamCreatedAt = new TeamCreatedAt(createdAt);
    const teamUpdatedAt: TeamUpdatedAt = new TeamUpdatedAt(updatedAt);

    super(teamId, teamCreatedAt, teamUpdatedAt);

    this.#officialName = new TeamOfficialName(officialName);
    this.#teamFounderUserId = new TReferencedTeamFounderUserId(teamFounderUserId);
  }

  public toPrimitives(): ITeam {
    return {
      id: this.id.value,
      officialName: this.#officialName.value,
      teamFounderUserId: this.#teamFounderUserId.teamFounderUserIdAsString,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
