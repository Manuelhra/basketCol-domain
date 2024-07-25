import { InvalidPropertyTypeError } from '../../../../shared/domain/exceptions/InvalidPropertyTypeError';
import { ObjectValueObject } from '../../../../shared/domain/value-objects/ObjectValueObject';
import { InvalidEmailPolicyError } from '../exceptions/InvalidEmailPolicyError';

export interface IUserEmailProps {
  value: string;
  verified: boolean;
}

export abstract class UserEmail extends ObjectValueObject<{ value: string; verified: boolean }> {
  static readonly #EMAIL_REG_EXP: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  protected constructor(value: IUserEmailProps) {
    const expectedType: string = '{ value: string; verified: boolean; }';

    super(value, 'email', expectedType);

    UserEmail.ensureIsValidEmailValue(value.value);
    UserEmail.ensureVerifiedIsDefined(value.verified);
  }

  private static ensureIsValidEmailValue(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidPropertyTypeError('email.value', 'string', typeof value);
    }

    if (!UserEmail.#EMAIL_REG_EXP.test(value)) {
      throw new InvalidEmailPolicyError(value);
    }
  }

  private static ensureVerifiedIsDefined(verified: boolean): void {
    if (verified === null || verified === undefined) {
      throw new InvalidPropertyTypeError('email.active', 'boolean', typeof verified);
    }
  }
}

// TODO: Validar si se envía un tipo de dato que no es sin usar capa infrastructure
