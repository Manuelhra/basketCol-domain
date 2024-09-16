import { UserSubscriptionType } from '../../../shared/domain/value-objects/UserSubscriptionType';

export class HostUserSubscriptionType extends UserSubscriptionType {
  public constructor(value: string) {
    super(value);
  }
}
