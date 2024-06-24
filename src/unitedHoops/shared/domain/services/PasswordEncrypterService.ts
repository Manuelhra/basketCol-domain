export interface PasswordEncrypterService {
  encrypt(password: string): string;
  compareEncryptedString(password: string, encryptedPassword: string): boolean;
}
