import { UpdatedAtValueObject } from '../../../../shared/domain/value-objects/UpdatedAtValueObject';

export class LeagueUpdatedAt extends UpdatedAtValueObject {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueUpdatedAt {
    return new LeagueUpdatedAt(value);
  }
}
