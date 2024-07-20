import { BooleanValueObject } from '../../../../shared/domain/value-objects/BooleanValueObject';

export class UserActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'active');
  }
}

