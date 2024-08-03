import { UserUpdatedAt } from '../../../shared/domain/value-objects/UserUpdatedAt';

export class LeagueFounderUserUpdatedAt extends UserUpdatedAt {
  public constructor(value: string) {
    super(value);
  }
}
