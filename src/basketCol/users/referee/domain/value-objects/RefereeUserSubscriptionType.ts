import { UserSubscriptionType } from '../../../shared/domain/value-objects';

export class RefereeUserSubscriptionType extends UserSubscriptionType {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): RefereeUserSubscriptionType {
    return new RefereeUserSubscriptionType(value);
  }
}
