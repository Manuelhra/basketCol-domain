import { UserPassword } from '../value-objects/UserPassword';

export interface IPasswordValueObjectCreationService {
  createFromHashedValue<T extends UserPassword>(hashedPassword: string): T;
}
