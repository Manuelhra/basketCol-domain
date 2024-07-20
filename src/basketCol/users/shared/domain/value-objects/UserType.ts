import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidUserTypeError } from '../exceptions/InvalidUserTypeError';

export abstract class UserType extends StringValueObject {
  protected abstract readonly TYPE: string;

  constructor(type: string) {
    super(type, 'type');

    this.ensureUserTypeIsCorrect(type);
  }

  public getType(): string {
    return this.TYPE;
  }

  private ensureUserTypeIsCorrect(type: string): void {
    if (type !== this.TYPE) {
      throw new InvalidUserTypeError(type);
    }
  }
}

