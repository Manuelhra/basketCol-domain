import { UserPassword } from '../value-objects/UserPassword';
import { IPasswordValueObjectCreationService } from './IPasswordValueObjectCreationService';

/**
 * Service for creating UserPassword value objects from hashed password values.
 */
export class PasswordValueObjectCreationService implements IPasswordValueObjectCreationService {
  /**
   * Creates a UserPassword value object from a hashed password value.
   * @param hashedPassword The hashed password string.
   */
  public createFromHashedValue<T extends UserPassword>(hashedPassword: string): T {
    return new UserPassword(hashedPassword, true) as T;
  }
}
