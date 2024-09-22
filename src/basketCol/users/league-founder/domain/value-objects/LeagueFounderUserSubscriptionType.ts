import { UserSubscriptionType } from '../../../shared/domain/value-objects';

export class LeagueFounderUserSubscriptionType extends UserSubscriptionType {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): LeagueFounderUserSubscriptionType {
    return new LeagueFounderUserSubscriptionType(value);
  }
}
