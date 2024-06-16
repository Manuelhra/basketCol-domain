export interface PasswordEncrypter {
  encrypt(password: string): string;
  compareEncryptedString(password: string, encryptedPassword: string): boolean;
}
