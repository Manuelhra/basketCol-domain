import { UserSubscriptionType } from '../../../shared/domain/value-objects';

export class PlayerUserSubscriptionType extends UserSubscriptionType {
  public constructor(value: string) {
    super(value);
  }
}
