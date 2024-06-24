import StringValueObject from './StringValueObject';

export enum UserType {
  HOST_USER = 'HOST_USER',
  LEAGUE_FOUNDER_USER = 'LEAGUE_FOUNDER_USER',
}

class UserTypeValueObject extends StringValueObject {
  readonly #VALID_TYPES: UserType[] = [UserType.HOST_USER, UserType.LEAGUE_FOUNDER_USER] as const;

  constructor(userType: UserType) {
    super(userType, 'userType');

    this.ensureUserTypeIsCorrect(userType);
  }

  private ensureUserTypeIsCorrect(userType: UserType): void {
    if (!this.#VALID_TYPES.includes(userType)) {
      throw new 
    }

  }
}

// TODO: Validar que no toque cambiar o modificar mas de un archivo cuando se agregue otro tipo de usuario


export default UserTypeValueObject;
