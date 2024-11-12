export interface IPasswordHashingDomainService {
  hash(password: string): Promise<string>;
  verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}
