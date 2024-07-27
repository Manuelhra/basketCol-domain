import { TeamFounderUserId } from '../../../users/teamFounder/domain/value-objects/TeamFounderUserId';
import { InvalidTeamFounderUserIdInstanceError } from '../exceptions/InvalidTeamFounderUserIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedTeamFounderUserId extends ValueObject<TeamFounderUserId> {
  protected constructor(value: string) {
    const teamFounderUserId: TeamFounderUserId = new TeamFounderUserId(value);

    super(teamFounderUserId, 'teamFounderUserId', 'string');

    this.ensureIsTeamFounderUserId(teamFounderUserId);
  }

  public get teamFounderUserIdAsString(): string {
    return this.value.value;
  }

  private ensureIsTeamFounderUserId(value: TeamFounderUserId): void {
    if (!(value instanceof TeamFounderUserId)) {
      throw new InvalidTeamFounderUserIdInstanceError();
    }
  }
}
