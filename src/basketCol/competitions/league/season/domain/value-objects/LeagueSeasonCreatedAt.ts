import { CreatedAtValueObject } from '../../../../../shared/domain/value-objects/CreatedAtValueObject';

export class LeagueSeasonCreatedAt extends CreatedAtValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueSeasonCreatedAt {
    return new LeagueSeasonCreatedAt(value);
  }
}
