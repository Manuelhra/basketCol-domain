import { InvalidEnumValueError } from '../../../../shared/domain/exceptions/InvalidEnumValueError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';

export abstract class UserAccountState extends StringValueObject {
  protected static readonly VALID_STATES = ['active', 'inactive', 'locked', 'suspended', 'banned', 'under_review', 'deleted', 'archived'] as const;

  protected constructor(value: string) {
    super(value, 'accountState');
    this.ensureIsValidAccountState(value);
  }

  static get active(): string {
    return this.VALID_STATES['0'];
  }

  static get inactive(): string {
    return this.VALID_STATES['1'];
  }

  static get locked(): string {
    return this.VALID_STATES['2'];
  }

  static get suspended(): string {
    return this.VALID_STATES['3'];
  }

  static get banned(): string {
    return this.VALID_STATES['4'];
  }

  static get underReview(): string {
    return this.VALID_STATES['5'];
  }

  static get deleted(): string {
    return this.VALID_STATES['6'];
  }

  static get archived(): string {
    return this.VALID_STATES['7'];
  }

  static getValidStates(): readonly string[] {
    return UserAccountState.VALID_STATES;
  }

  private ensureIsValidAccountState(value: string): void {
    if (!UserAccountState.VALID_STATES.includes(value as any)) {
      throw new InvalidEnumValueError('accountState', value, UserAccountState.VALID_STATES);
    }
  }
}
