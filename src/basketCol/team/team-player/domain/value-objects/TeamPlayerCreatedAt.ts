import { CreatedAtValueObject } from '../../../../shared/domain/value-objects/CreatedAtValueObject';

export class TeamPlayerCreatedAt extends CreatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamPlayerCreatedAt {
    return new TeamPlayerCreatedAt(value);
  }
}
