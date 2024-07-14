import UuidValueObject from '../../../../shared/domain/value-objects/UuidValueObject';

abstract class UserId extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

export default UserId;

// TODO: Cambiar el nombre de los value object Email por UserEmail
// Corregir el tema de las interfaces de usuario, ya que tienen es que implementar
