import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class LeagueFounderUserUpdatedAt extends UserUpdatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueFounderUserUpdatedAt {
    return new LeagueFounderUserUpdatedAt(value);
  }
}
