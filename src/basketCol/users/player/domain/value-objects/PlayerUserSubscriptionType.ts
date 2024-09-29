import { UserSubscriptionType } from '../../../shared/domain/value-objects';

export class PlayerUserSubscriptionType extends UserSubscriptionType {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserSubscriptionType {
    return new PlayerUserSubscriptionType(value);
  }
}
