import { BooleanValueObject } from '../../../../shared/domain/value-objects/BooleanValueObject';

export class HostUserActive extends BooleanValueObject {
  constructor(value: boolean) {
    super(value, 'active');
  }
}

