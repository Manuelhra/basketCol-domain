import { InvalidEnumValueError } from '../../../../shared/domain/exceptions/InvalidEnumValueError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class UserSubscriptionType extends StringValueObject {
  static readonly #VALID_TYPES = ['free', 'premium', 'trial', 'expired'] as const;

  protected constructor(value: string) {
    super(value, 'subscriptionType');
    this.ensureIsValidSubscriptionType(value);
  }

  static free(): string {
    return UserSubscriptionType.#VALID_TYPES['0'];
  }

  static premium(): string {
    return UserSubscriptionType.#VALID_TYPES['1'];
  }

  static trial(): string {
    return UserSubscriptionType.#VALID_TYPES['2'];
  }

  static expired(): string {
    return UserSubscriptionType.#VALID_TYPES['3'];
  }

  static getValidTypes(): readonly string[] {
    return UserSubscriptionType.#VALID_TYPES;
  }

  private ensureIsValidSubscriptionType(value: string): void {
    if (!UserSubscriptionType.#VALID_TYPES.includes(value as any)) {
      throw new InvalidEnumValueError('subscriptionType', value, UserSubscriptionType.#VALID_TYPES);
    }
  }
}
