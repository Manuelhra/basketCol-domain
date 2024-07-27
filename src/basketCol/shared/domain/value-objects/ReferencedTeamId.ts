import { TeamId } from '../../../team/domain/value-objects/TeamId';
import { InvalidTeamIdInstanceError } from '../exceptions/InvalidTeamIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedTeamId extends ValueObject<TeamId> {
  protected constructor(value: string, propertyName: string = 'teamId') {
    const teamId: TeamId = new TeamId(value);

    super(teamId, propertyName, 'string');

    this.ensureIsTeamId(teamId);
  }

  public get teamIdAsString(): string {
    return this.value.value;
  }

  private ensureIsTeamId(value: TeamId): void {
    if (!(value instanceof TeamId)) {
      throw new InvalidTeamIdInstanceError();
    }
  }
}
