import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueLevel extends StringValueObject {
  constructor(value: string) {
    super(value, 'LeagueLevel');
  }
}

// TODO: Crear administrador de niveles de UnitedHoops y
// luego replantear la estructura de level para la entidad League

export default LeagueLevel;
