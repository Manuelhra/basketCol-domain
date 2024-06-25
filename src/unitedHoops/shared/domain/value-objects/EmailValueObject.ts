import InvalidEmailPolicyError from '../exceptions/InvalidEmailPolicyError';
import InvalidPropertyTypeError from '../exceptions/InvalidPropertyTypeError';
import ObjectValueObject from './ObjectValueObject';

class EmailValueObject extends ObjectValueObject<{ value: string; verified: boolean }> {
  readonly #EMAIL_REG_EXP: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(value: { value: string; verified: boolean; }) {
    const expectedType: string = '{ value: string; verified: boolean; }';

    super(value, 'email', expectedType);

    this.ensureIsValidEmailValue(value.value);
    this.ensureVerifiedIsDefined(value.verified);
  }

  private ensureIsValidEmailValue(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidPropertyTypeError('email.value', 'string', typeof value);
    }

    if (!this.#EMAIL_REG_EXP.test(value)) {
      throw new InvalidEmailPolicyError(value);
    }
  }

  private ensureVerifiedIsDefined(verified: boolean): void {
    if (verified === null || verified === undefined) {
      throw new InvalidPropertyTypeError('email.active', 'boolean', typeof verified);
    }
  }
}

export default EmailValueObject;

// TODO: Validar si se envía un tipo de dato que no es sin usar capa infrastructure
