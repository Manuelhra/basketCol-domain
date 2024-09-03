import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidUserTypeError } from '../exceptions/InvalidUserTypeError';

export abstract class UserType extends StringValueObject {
  protected abstract readonly TYPE: string;

  protected constructor(type: string) {
    super(type, 'type');

    this.ensureUserTypeIsCorrect(type);
  }

  private ensureUserTypeIsCorrect(type: string): void {
    if (type !== this.TYPE) {
      throw new InvalidUserTypeError(type);
    }
  }
}
