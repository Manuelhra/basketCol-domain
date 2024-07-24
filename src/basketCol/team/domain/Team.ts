import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { TeamFounderUserId } from '../../users/teamFounder/domain/value-objects/TeamFounderUserId';
import { ITeam } from './ITeam';
import { TeamCreatedAt } from './value-objects/TeamCreatedAt';
import { TeamId } from './value-objects/TeamId';
import { TeamOfficialName } from './value-objects/TeamOfficialName';
import { TeamUpdatedAt } from './value-objects/TeamUpdatedAt';

export class Team extends AggregateRoot<ITeam> {
  readonly #officialName: TeamOfficialName;

  readonly #teamFounderUserId: TeamFounderUserId;

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
    this.#teamFounderUserId = new TeamFounderUserId(teamFounderUserId);
  }

  public toPrimitives(): ITeam {
    return {
      id: this.id.getValue(),
      officialName: this.#officialName.getValue(),
      teamFounderUserId: this.#teamFounderUserId.getValue(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    };
  }
}
