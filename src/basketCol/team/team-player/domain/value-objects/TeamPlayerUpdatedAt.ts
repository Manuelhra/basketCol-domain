import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class TeamPlayerUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamPlayerUpdatedAt {
    return new TeamPlayerUpdatedAt(value);
  }
}
