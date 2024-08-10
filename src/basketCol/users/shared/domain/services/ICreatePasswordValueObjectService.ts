import { UserPassword } from '../value-objects/UserPassword';

export interface ICreatePasswordValueObjectService {
  run<T extends UserPassword>(encryptedPassword: string): T;
}
