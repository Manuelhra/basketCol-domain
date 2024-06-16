import InvalidArgumentError from '../exceptions/InvalidArgumentError';
import ObjectValueObject from './ObjectValueObject';

abstract class EmailValueObject extends ObjectValueObject<{ value: string; verified: boolean }> {
  readonly #emailRegex: RegExp;

  constructor(
    value: { value: string; verified: boolean; },
    regex: RegExp,
  ) {
    super(value, 'Email');

    this.#emailRegex = regex;

    this.ensureIsValidEmailValue(value.value);
    this.ensureVerifiedIsDefined(value.verified);
  }

  private ensureIsValidEmailValue(emailValue: string): void {
    if (emailValue === null || emailValue === undefined) {
      throw new InvalidArgumentError('email value must be defined');
    }

    if (!this.#emailRegex.test(emailValue)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${emailValue}>`);
    }
  }

  private ensureVerifiedIsDefined(verified: boolean): void {
    if (verified === null || verified === undefined) {
      throw new InvalidArgumentError('Verified must be defined');
    }
  }
}

export default EmailValueObject;

// TODO: Validar si se envía un tipo de dato que no es sin usar capa infrastructure
