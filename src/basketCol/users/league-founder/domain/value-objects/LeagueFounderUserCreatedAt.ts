import { UserCreatedAt } from '../../../shared/domain/value-objects/UserCreatedAt';

export class LeagueFounderUserCreatedAt extends UserCreatedAt {
  public constructor(value: string) {
    super(value);
  }
}
