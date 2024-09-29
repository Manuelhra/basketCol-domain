import { UserSubscriptionType } from '../../../shared/domain/value-objects/UserSubscriptionType';

export class HostUserSubscriptionType extends UserSubscriptionType {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): HostUserSubscriptionType {
    return new HostUserSubscriptionType(value);
  }
}
