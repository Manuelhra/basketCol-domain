import { BooleanValueObject } from '../../../../shared/domain/value-objects/BooleanValueObject';

export class LeagueFounderUserActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'active');
  }
}

