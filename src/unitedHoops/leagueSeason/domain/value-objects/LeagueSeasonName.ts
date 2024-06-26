import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

class LeagueSeasonName extends StringValueObject {
  readonly #LENGTH: { min: number; max: number } = { min: 8, max: 20 } as const;
}

export default LeagueSeasonName;
