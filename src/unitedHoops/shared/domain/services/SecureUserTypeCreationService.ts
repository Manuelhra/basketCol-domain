import { Nullable } from '../Nullable';
import { UserType } from '../value-objects/UserTypeValueObject';

class SecureUserTypeCreationService {
  public createFromPlainText(userType: string): Nullable<UserType> {
    switch (userType) {
      case 'HOST_USER':
        return UserType.HOST_USER;
      case 'LEAGUE_FOUNDER_USER':
        return UserType.LEAGUE_FOUNDER_USER;
      default: return null;
    }
  }
}

// TODO: Validar que no toque cambiar o modificar mas de un archivo cuando se agregue otro tipo de usuario

export default SecureUserTypeCreationService;
