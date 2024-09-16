import { UserSubscriptionType } from '../../../shared/domain/value-objects';

export class RefereeUserSubscriptionType extends UserSubscriptionType {
  public constructor(value: string) {
    super(value);
  }
}
