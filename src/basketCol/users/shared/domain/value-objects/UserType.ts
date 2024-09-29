import { MethodNotImplementedError } from '../../../../shared/domain/exceptions/MethodNotImplementedError';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidUserTypeError } from '../exceptions/InvalidUserTypeError';

export abstract class UserType extends StringValueObject {
  protected static readonly TYPE: string;

  protected constructor(type: string) {
    super(type, 'type');

    this.ensureUserTypeIsCorrect(type);
  }

  public static get value(): string {
    throw MethodNotImplementedError.create('This method should be overridden in derived classes');
  }

  private ensureUserTypeIsCorrect(type: string): void {
    if (type !== (this.constructor as typeof UserType).TYPE) {
      throw InvalidUserTypeError.create(type);
    }
  }
}
