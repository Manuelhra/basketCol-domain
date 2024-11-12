import { UserPassword } from '../value-objects/UserPassword';

export interface IPasswordValueObjectCreationDomainService {
  createFromHashedValue<T extends UserPassword>(hashedPassword: string): T;
}
