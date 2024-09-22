import { UserSubscriptionType } from '../../../shared/domain/value-objects';

export class TeamFounderUserSubscriptionType extends UserSubscriptionType {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): TeamFounderUserSubscriptionType {
    return new TeamFounderUserSubscriptionType(value);
  }
}
