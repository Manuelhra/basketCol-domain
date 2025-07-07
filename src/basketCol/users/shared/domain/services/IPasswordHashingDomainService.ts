// TODO: Validar que todo lo que son interfaces empiecen por I y deben de estar en la carpeta ports

export interface IPasswordHashingDomainService {
  hash(password: string): Promise<string>;
  verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}
