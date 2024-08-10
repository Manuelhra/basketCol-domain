import { UserPassword } from '../value-objects/UserPassword';
import { ICreatePasswordValueObjectService } from './ICreatePasswordValueObjectService';

export class CreatePasswordValueObjectService implements ICreatePasswordValueObjectService {
  public run<T extends UserPassword>(encryptedPassword: string): T {
    return new UserPassword(encryptedPassword) as T;
  }
}
