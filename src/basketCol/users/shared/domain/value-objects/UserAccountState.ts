import { InvalidEnumValueError } from '../../../../shared/domain/exceptions/InvalidEnumValueError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class UserAccountState extends StringValueObject {
  static readonly #VALID_STATES = ['active', 'inactive', 'locked', 'suspended', 'banned', 'under_review', 'deleted', 'archived'] as const;

  protected constructor(value: string) {
    super(value, 'accountState');
    this.ensureIsValidAccountState(value);
  }

  private ensureIsValidAccountState(value: string): void {
    if (!UserAccountState.#VALID_STATES.includes(value as any)) {
      throw new InvalidEnumValueError('accountState', value, UserAccountState.#VALID_STATES);
    }
  }
}
