import InvalidUserTypeError from '../exceptions/InvalidUserTypeError';
import StringValueObject from './StringValueObject';

abstract class TypeValueObject extends StringValueObject {
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

export default TypeValueObject;
