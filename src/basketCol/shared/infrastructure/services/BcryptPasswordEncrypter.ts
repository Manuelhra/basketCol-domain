import bcrypt from 'bcrypt';

import { IPasswordEncrypterService } from '../../../users/shared/domain/services/IPasswordEncrypterService';

export class BcryptPasswordEncrypter implements IPasswordEncrypterService {
  public encrypt(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public compareEncryptedString(password: string, encryptedPassword: string): boolean {
    return bcrypt.compareSync(password, encryptedPassword);
  }
}
