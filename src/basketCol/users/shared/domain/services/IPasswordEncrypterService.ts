export interface IPasswordEncrypterService {
  encrypt(password: string): string;
  compareEncryptedString(password: string, encryptedPassword: string): boolean;
}
