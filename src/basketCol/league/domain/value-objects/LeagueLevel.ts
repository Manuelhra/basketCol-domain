import { StringValueObject } from '../../../shared/domain/value-objects/StringValueObject';

export class LeagueLevel extends StringValueObject {
  constructor(value: string) {
    super(value, 'level');
  }
}

// TODO: Crear administrador de niveles de UnitedHoops y
// luego replantear la estructura de level para la entidad League

