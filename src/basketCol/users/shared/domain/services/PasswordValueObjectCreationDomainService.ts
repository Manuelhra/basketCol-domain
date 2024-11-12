import { UserPassword } from '../value-objects/UserPassword';
import { IPasswordValueObjectCreationDomainService } from './IPasswordValueObjectCreationDomainService';

/**
 * DomainService for creating UserPassword value objects from hashed password values.
 */
export class PasswordValueObjectCreationDomainService implements IPasswordValueObjectCreationDomainService {
  public static create(): PasswordValueObjectCreationDomainService {
    return new PasswordValueObjectCreationDomainService();
  }

  /**
   * Creates a UserPassword value object from a hashed password value.
   * @param hashedPassword The hashed password string.
   */
  public createFromHashedValue<T extends UserPassword>(hashedPassword: string): T {
    return UserPassword.create(hashedPassword, true) as T;
  }
}
