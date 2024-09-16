import { InvalidEnumValueError } from '../../../../shared/domain/exceptions/InvalidEnumValueError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class UserSubscriptionType extends StringValueObject {
  static readonly #VALID_TYPES = ['free', 'premium', 'trial', 'expired'] as const;

  protected constructor(value: string) {
    super(value, 'subscriptionType');
    this.ensureIsValidSubscriptionType(value);
  }

  private ensureIsValidSubscriptionType(value: string): void {
    if (!UserSubscriptionType.#VALID_TYPES.includes(value as any)) {
      throw new InvalidEnumValueError('subscriptionType', value, UserSubscriptionType.#VALID_TYPES);
    }
  }
}
