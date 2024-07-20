import { StringValueObject } from '../../../shared/domain/value-objects/StringValueObject';

export class LeagueRules extends StringValueObject {
  constructor(value: string) {
    super(value, 'rules');
  }
}

