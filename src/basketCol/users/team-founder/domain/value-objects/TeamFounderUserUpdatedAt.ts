import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class TeamFounderUserUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserUpdatedAt {
    return new TeamFounderUserUpdatedAt(value);
  }
}
