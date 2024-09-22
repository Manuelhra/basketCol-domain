import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export class TeamFounderUserCreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserCreatedAt {
    return new TeamFounderUserCreatedAt(value);
  }
}
