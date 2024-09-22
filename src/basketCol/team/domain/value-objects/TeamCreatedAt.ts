import { CreatedAtValueObject } from '../../../shared/domain/value-objects/CreatedAtValueObject';

export class TeamCreatedAt extends CreatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamCreatedAt {
    return new TeamCreatedAt(value);
  }
}
