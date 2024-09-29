import { UpdatedAtValueObject } from '../../../shared/domain/value-objects/UpdatedAtValueObject';

export class TeamUpdatedAt extends UpdatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamUpdatedAt {
    return new TeamUpdatedAt(value);
  }
}
