import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class LeagueFounderUserCreatedAt extends UserCreatedAt {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueFounderUserCreatedAt {
    return new LeagueFounderUserCreatedAt(value);
  }
}
